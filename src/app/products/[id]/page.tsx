'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext'; // Import the CartContext

// Dummy data (replace with API or database calls)
const products = [
  { id: '1', name: 'Men T-Shirt', image: '/images/t-shirts/men/men1.jpg', description: 'Comfortable cotton t-shirt for men. Currently available in Pink color. Washable stuff.', price: 20.99 },
  { id: '2', name: 'Men T-Shirt', image: '/images/t-shirts/men/men2.jpg', description: 'Comfortable cotton t-shirt for men. Currently Available in Red, Off-white and Dark Blue color.', price: 20.99 },
  { id: '3', name: 'Men T-Shirt', image: '/images/t-shirts/men/men4.jpg', description: 'Comfortable cotton t-shirt for men. Currently available in Printed Dark Blue color.', price: 20.99 },
  { id: '4', name: 'Women Jeans', image: '/images/jeans/women/women1.jpg', description: 'Stylish and durable jeans for women.', price: 35.99 },
  { id: '5', name: 'Women Jeans', image: '/images/jeans/women/women2.jpg', description: 'Stylish and durable jeans for women.', price: 35.99 },
  { id: '6', name: 'Women Jeans', image: '/images/jeans/women/women4.jpg', description: 'Stylish and durable jeans for women.', price: 35.99 },
  { id: '7', name: 'Kids Shorts', image: '/images/shorts/kids/kids1.jpg', description: 'Soft and breathable shorts for kids.', price: 15.99 },
  { id: '8', name: 'Kids Shorts', image: '/images/shorts/kids/kids2.jpg', description: 'Soft and breathable shorts for kids.', price: 15.99 },
  { id: '9', name: 'Kids Shorts', image: '/images/shorts/kids/kids3.jpg', description: 'Soft and breathable shorts for kids.', price: 15.99 },
];

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();

  const product = products.find((p) => p.id === id);
  if (!product) {
    return <div className="container mx-auto py-12 text-center">Product not found.</div>;
  }

  const { cart, addToCart } = useCart(); // Using cart and addToCart from context
  const [showAddToCartAlert, setShowAddToCartAlert] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    color: '',
    cnic: '',
    phoneNumber: '',
    address: '',
  });
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  // Add to cart function
  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, image: product.image, price: product.price, quantity: 1 });
    setShowAddToCartAlert(true);
    setTimeout(() => setShowAddToCartAlert(false), 3000);
  };

  // Buy Now function
  const handleBuyNow = () => {
    setShowForm(true); // Show the customer details form when Buy Now is clicked
  };

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false); // Hide the form
    setShowThankYouPopup(true); // Show the thank you pop-up
    setTimeout(() => setShowThankYouPopup(false), 5000); // Hide the thank you pop-up after 5 seconds
  };

  // View Cart button handler
  const handleViewCart = () => {
    router.push('/cart'); // Ensure you have a `/cart` page implemented
  };

  return (
    <div className="container mx-auto py-12">
      {/* Cart Summary */}
      <div className="text-right mb-4 text-gray-700">
        <p>Items in Cart: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <p>
          Total Price: $
          {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <div className="mb-4">
        <img src={product.image} alt={product.name} className="w-48 h-48" />
      </div>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-gray-800 font-semibold mb-6">${product.price}</p>

      <div className="flex space-x-4">
        {/* Add to Cart Button */}
        <button onClick={handleAddToCart} className="px-6 py-2 bg-green-500 text-white rounded">
          Add to Cart
        </button>

        {/* Buy Now Button */}
        <button onClick={handleBuyNow} className="px-6 py-2 bg-blue-500 text-white rounded">
          Buy Now
        </button>

        {/* View Cart Button */}
        <button onClick={handleViewCart} className="px-6 py-2 bg-gray-700 text-white rounded">
          View Cart
        </button>
      </div>

      {/* Add to Cart Alert */}
      {showAddToCartAlert && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-3 shadow-md">
          <p className="text-lg font-semibold">Item added to cart!</p>
        </div>
      )}

      {/* Customer Details Form (Appears when Buy Now is clicked) */}
      {showForm && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Enter Your Details</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Color"
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="CNIC"
              value={formData.cnic}
              onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded"
              required
            ></textarea>
            <button type="submit" className="w-full px-6 py-2 bg-blue-500 text-white rounded">
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Thank You Pop-up */}
      {showThankYouPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Thank you for shopping!</h2>
            <p className="text-gray-600">Your order will be delivered within 5-7 business days.</p>
          </div>
        </div>
      )}
    </div>
  );
}

