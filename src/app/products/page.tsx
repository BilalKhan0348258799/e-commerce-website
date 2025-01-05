import Link from 'next/link';
import Banner from '../components/Banner'; // Ensure the correct import path for the Banner component

const products = [
  { id: 1, name: 'T-Shirt (Men)', category: 'T-Shirts', color: 'Pink', image: '/images/t-shirts/men/men1.jpg' },
  { id: 2, name: 'T-Shirt (Men)', category: 'T-Shirts', color: 'Drak Blue, Red , Off-white', image: '/images/t-shirts/men/men2.jpg' },
  { id: 3, name: 'T-Shirt (Men)', category: 'T-Shirts', color: 'Printed Blue', image: '/images/t-shirts/men/men4.jpg' },
  { id: 4, name: 'Jeans (Women)', category: 'Jeans', color: 'Dark Blue', image: '/images/jeans/women/women1.jpg' },
  { id: 5, name: 'Jeans (Women)', category: 'Jeans', color: 'Shaded Blue', image: '/images/jeans/women/women2.jpg' },
  { id: 6, name: 'Jeans (Women)', category: 'Jeans', color: 'Light blue', image: '/images/jeans/women/women4.jpg' },
  { id: 7, name: 'Shorts (Kids)', category: 'Shorts', color: 'Shaded Blue', image: '/images/shorts/kids/kids1.jpg' },
  { id: 8, name: 'Shorts (Kids)', category: 'Shorts', color: 'Gray', image: '/images/shorts/kids/kids2.jpg' },
  { id: 9, name: 'Shorts (Kids)', category: 'Shorts', color: 'Shaded Black', image: '/images/shorts/kids/kids3.jpg' },
];

export default function ProductsPage() {
  return (
    <>
      <Banner /> {/* Add the Banner component here */}
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-50 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-600">{product.category}</p>
                <p className="text-gray-800 font-bold">{product.color}</p>
                <Link href={`/products/${product.id}`}>
                  <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

