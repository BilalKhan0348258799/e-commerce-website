import './globals.css';
import Link from 'next/link';
import { CartProvider } from '@/context/CartContext'; // Import CartProvider

export const metadata = {
  title: 'Garments E-Commerce',
  description: 'Aesthetic garments website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-pink-100">
        {/* Wrap everything in CartProvider */}
        <CartProvider>
          <header className="bg-teal-300 text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-4">
              <Link href="/">
                <img src="./images/logo.png" alt="Logo" className="h-10 w-30" />
              </Link>
              <nav className="flex space-x-6">
                <Link href="/" className="hover:text-gray-400">Home</Link>
                <Link href="/about" className="hover:text-gray-400">About</Link>
                <Link href="/contact" className="hover:text-gray-400">Contact Us</Link>
                <Link href="/complain" className="hover:text-gray-400">Complain</Link>
                <Link href="/return-policy" className="hover:text-gray-400">Return Policy</Link>
              </nav>
            </div>
          </header>
          <main className="min-h-screen">{children}</main>
          <footer className="bg-teal-400 text-white py-6">
            <div className="container mx-auto text-center">
              <p>Follow us on:</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="hover:text-gray-400">Facebook</a>
                <a href="#" className="hover:text-gray-400">Instagram</a>
                <a href="#" className="hover:text-gray-400">Twitter</a>
              </div>
              <p className="mt-4">123 Garments Street, Fashion City</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
