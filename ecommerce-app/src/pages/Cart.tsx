import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const mergedCart = cart.reduce((acc: CartItem[], item: CartItem) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    setCartItems(mergedCart);
  }, []);

  const updateQuantity = (id: number, change: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <h3 className="text-2xl mb-4">
          Your cart is empty.{" "}
          <span className="hover:underline" onClick={() => navigate("/")}>
            Go to homepage
          </span>
        </h3>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 flex flex-col items-center shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h2 className="text-lg font-bold mb-2 text-center">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
              <div className="flex items-center justify-center mb-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-gray-300 px-2 py-1 rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-1 border">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-gray-300 px-2 py-1 rounded-r"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white px-4 py-2 mt-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="flex item-center justify-center">
          <button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
        >
          Checkout
        </button>
        </div>
        
      )}
    </div>
  );
};

export default Cart;
