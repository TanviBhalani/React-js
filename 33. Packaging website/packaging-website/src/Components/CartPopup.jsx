import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPopup() {
  const { showPopup } = useCart();

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-green-200 p-5 rounded shadow w-72">
      <p className="mb-3">Sauce Tub added to cart</p>
      <Link to="/cart" className="border px-4 py-2 inline-block">
        View cart
      </Link>
    </div>
  );
}
