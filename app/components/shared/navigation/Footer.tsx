import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-16">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Mind<span className="text-[var(--primary-text-color)]">Nest</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Encuentra el espacio perfecto para tu práctica profesional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[var(--primary-text-color)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-[var(--primary-text-color)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-[var(--primary-text-color)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Consultories</h4>
            <ul className="space-y-2">
              <li><Link href="/spaces" className="text-gray-600 hover:text-[var(--primary-text-color)]">Explore Spaces</Link></li>
              <li><Link href="/favorite" className="text-gray-600 hover:text-[var(--primary-text-color)]">Favorites</Link></li>
              <li><Link href="/bookings" className="text-gray-600 hover:text-[var(--primary-text-color)]">Reservations</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-[var(--primary-text-color)]">Our Story</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[var(--primary-text-color)]">Contact Us</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-[var(--primary-text-color)]">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-600 hover:text-[var(--primary-text-color)]">Help Center</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-[var(--primary-text-color)]">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-[var(--primary-text-color)]">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} MindNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;