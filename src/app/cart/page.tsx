'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext'; // Import the CartContext

export default function CartPage() {
  const { cart, removeFromCart } = useCart(); // Access cart items and the remove function from context
  const [total, setTotal] = useState(0);

  // Calculate the total whenever the cart changes
  useEffect(() => {
    const totalAmount = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setTotal(totalAmount);
  }, [cart]);

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>
      {cart.length > 0 ? (
        <div>
          <ul className="divide-y divide-white-200 mb-6">
            {cart.map((item) => (
              <li key={item.id} className="py-4 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-white-600">Quantity: {item.quantity}</p>
                </div>
                <p className="text-white-800 font-bold">Rs. {item.price * item.quantity}</p>
                <button onClick={() => handleRemoveItem(item.id)} className="text-red-600">Remove</button>
              </li>
            ))}
          </ul>
          <div className="text-right font-bold text-lg mb-6">Total: Rs. {total}</div>
          <button className="bg-white-800 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition">
            Checkout
          </button>
        </div>
      ) : (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      )}
    </div>
  );
}

