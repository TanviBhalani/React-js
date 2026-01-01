import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);

  // 🔑 IMPORTANT FLAG (prevents overwrite on refresh)
  const [hasFetchedCart, setHasFetchedCart] = useState(false);

  // ===============================
  // STEP 2 — AUTH LISTENER
  // ===============================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // ===============================
  // STEP 3 — FETCH CART FROM FIREBASE
  // ===============================
  useEffect(() => {
    const fetchCart = async () => {
      if (!user) return;

      try {
        const cartRef = doc(db, "users", user.uid);
        const cartSnap = await getDoc(cartRef);

        if (cartSnap.exists()) {
          setCart(cartSnap.data().cart || []);
        } else {
          setCart([]);
        }

        // ✅ VERY IMPORTANT
        setHasFetchedCart(true);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [user]);

  // ===============================
  // STEP 4 — SAVE CART TO FIREBASE
  // ===============================
  useEffect(() => {
    if (!user || !hasFetchedCart) return;

    const saveCart = async () => {
      try {
        const cartRef = doc(db, "users", user.uid);
        await setDoc(cartRef, { cart }, { merge: true });
      } catch (error) {
        console.error("Error saving cart:", error);
      }
    };

    saveCart();
  }, [cart, user, hasFetchedCart]);

  // ===============================
  // CART ACTIONS
  // ===============================

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.volume === product.volume &&
          item.pack === product.pack
      );

      if (existing) {
        return prev.map((item) =>
          item === existing
            ? { ...item, qty: item.qty + product.qty }
            : item
        );
      }

      return [...prev, product];
    });

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  // INCREASE QTY
  const increaseQty = (index) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // DECREASE QTY (MIN = 1)
  const decreaseQty = (index) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // REMOVE ITEM
  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // ===============================
  // STEP 5 — CLEAR CART (CHECKOUT)
  // ===============================
  const clearCart = async () => {
    setCart([]);

    if (!user) return;

    try {
      const cartRef = doc(db, "users", user.uid);
      await setDoc(cartRef, { cart: [] }, { merge: true });
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  // CART COUNT (NAVBAR)
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        cartCount,
        showPopup,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

