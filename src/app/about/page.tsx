// app/about/page.tsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 text-black">About Us</h1>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 text-black">Our Background</h2>
        <p className="mt-4 text-lg text-gray-600 text-black">
        We are a dedicated team passionate about creating high-quality, stylish clothing for people of all ages. With a rich history in the fashion industry, we have always focused on delivering garments that provide both comfort and style. Our commitment to excellence and customer satisfaction has made us a trusted name in the fashion world.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 text-black">What We Do</h2>
        <p className="mt-4 text-lg text-gray-600 text-black">
        We design and produce premium-quality t-shirts, jeans, and shorts for kids, men, and women. Our products are crafted with attention to detail, ensuring they meet the highest standards of comfort and durability. We offer a wide variety of colors, styles, and sizes to suit different tastes and preferences, making fashion accessible to everyone.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 text-black">Our Values</h2>
        <p className="mt-4 text-lg text-gray-600 text-black">
        We believe in sustainability, ethical practices, and innovation. Our team is driven by a passion for creating long-lasting and timeless pieces that not only look great but are also good for the planet. We value quality, integrity, and customer trust, always aiming to exceed expectations and build lasting relationships with our customers.
        </p>
      </div>
    </div>
  );
};

export default About;
