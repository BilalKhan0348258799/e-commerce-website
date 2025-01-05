import Link from 'next/link';
import Banner from './components/Banner'; // Import the Banner component

export default function HomePage() {
  return (
    <>
      {/* Display the banner at the top */}
      <Banner />
{/* Image section below the banner */}
<div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex justify-center items-center">
          <img
            src="/images/main shirt.jpg"
            alt="T-Shirts Collection"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/main jeans.jpg"
            alt="Jeans Collection"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/main short.jpg"
            alt="Shorts Collection"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Garments Store</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover premium-quality t-shirts, jeans, and shorts for kids, men, and women. Explore a wide variety of styles, colors, and sizes to suit every occasion. Whether you're looking for a casual outfit, something for the weekend, or a comfortable daily wear, our collection is designed to provide the perfect fit and exceptional comfort. With a focus on premium materials and trendy designs, you'll find the best of fashion at unbeatable prices. Shop now and enjoy a seamless shopping experience with easy returns and exchanges! Browse our exclusive collection of high-quality t-shirts, jeans, and shorts, carefully crafted to meet the needs of every individual. From vibrant colors to classic neutrals, our garments are designed to match your unique style. Whether you're dressing up for a special event or going for a laid-back look, our versatile pieces will elevate your wardrobe.

          With a commitment to sustainability and durability, our clothes are made to last, ensuring you get the most value for your purchase. Plus, enjoy hassle-free shopping with secure payment options, fast delivery, and outstanding customer service. Don’t miss out on our seasonal sales, and stay tuned for new arrivals to keep your wardrobe fresh all year round!
        </p>
        <Link href="/products">
          <button className="bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Image section below the banner
      <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex justify-center items-center">
          <img
            src="/images/t-shirts.jpg"
            alt="T-Shirts Collection"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/jeans.jpg"
            alt="Jeans Collection"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/shorts.jpg"
            alt="Shorts Collection"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div> */}
    </>
  );
}


