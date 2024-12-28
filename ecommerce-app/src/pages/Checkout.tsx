import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [upiId, setUpiId] = useState("");
  const [cardNumber1, setCardNumber1] = useState("");
  const [cardNumber2, setCardNumber2] = useState("");
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

  const handlePayment = () => {
    if (upiId.trim() || cardNumber1.trim() || cardNumber2.trim()) {
      alert("Payment successful! Thank you for shopping.");
      localStorage.removeItem("cart");
      setCartItems([]);
      navigate("/");
    } else {
      alert("Please enter UPI ID or Card Number to proceed.");
    }
  };

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cartItems.length === 0 ? (
        <h3 className="text-2xl mb-4">
          Your cart is empty.{" "}
          <span
            className="hover:underline cursor-pointer"
            onClick={() => navigate("/")}
          >
            Go to homepage
          </span>
        </h3>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full mb-4 border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">Image</th>
                <th className="border px-4 py-2 text-left">Product</th>
                <th className="border px-4 py-2 text-left">Price</th>
                <th className="border px-4 py-2 text-left">Quantity</th>
                <th className="border px-4 py-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                  </td>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">${item.price.toFixed(2)}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {cartItems.length > 0 && (
        <>
          <h2 className="text-lg font-bold mb-4">
            Grand Total: ${grandTotal.toFixed(2)}
          </h2>
          <div className="mb-4">
            <label className="block mb-2">UPI ID</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Debit Card Number</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter Debit Card Number"
              value={cardNumber1}
              onChange={(e) => setCardNumber1(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Credit Card Number</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter Credit Card Number"
              value={cardNumber2}
              onChange={(e) => setCardNumber2(e.target.value)}
            />
          </div>
          <button
            onClick={handlePayment}
            className="bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full"
          >
            Complete Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
