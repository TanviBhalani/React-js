// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find(item => item.id === product.id);

//       if (existing) {
//         return prev.map(item =>
//           item.id === product.id
//             ? { ...item, qty: item.qty + 1 }
//             : item
//         );
//       }

//       return [...prev, { ...product, qty: 1 }];
//     });
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }



// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find(
//         (item) =>
//           item.id === product.id &&
//           item.volume === product.volume &&
//           item.pack === product.pack
//       );

//       if (existing) {
//         return prev.map((item) =>
//           item === existing
//             ? { ...item, qty: item.qty + product.qty }
//             : item
//         );
//       }

//       return [...prev, product];
//     });

//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000);
//   };

//   const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         cartCount,
//         showPopup,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }














import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

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

  // INCREASE QUANTITY
  const increaseQty = (index) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // DECREASE QUANTITY (MIN = 1)
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

  // CLEAR CART (CHECKOUT)
  const clearCart = () => {
    setCart([]);
  };

  // CART COUNT FOR NAVBAR
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
