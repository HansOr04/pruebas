"use client";
import React, { useEffect, useState } from 'react';
import HeroSection from '@/app/(pages)/home/components/HeroSection';
import ConsultoriesList from '@/app/(pages)/home/components/ConsultoriesList';
import Footer from '@/app/components/shared/navigation/Footer';
import MobileConsultoriesList from '@/app/(pages)/home/mobile/MobileConsultoriesList';
import Link from 'next/link';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Show nothing during SSR to prevent hydration issues
  if (!isClient) {
    return null;
  }

  // Mobile version of the page
  if (isMobile) {
    return (
      <>
        <div className="pt-4 px-4">
          <div className="text-2xl font-bold mb-6">
            Mind<span className="text-[var(--primary-text-color)]">Nest</span>
          </div>
          
          {/* Search box */}
          <div className="relative flex w-full mb-6">
            <input
              type="text"
              placeholder="Encuentra tu lugar de trabajo"
              className="w-full py-3 px-4 pr-12 bg-green-100/60 rounded-full text-gray-800 focus:outline-none"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Mobile Consultories List with padding for bottom nav */}
        <div className="pb-20">
          <MobileConsultoriesList />
        </div>
        
        {/* Mobile Bottom Navigation - Fixed with Link components */}
        <nav className="fixed bottom-0 left-0 right-0 bg-[var(--primary-color)] py-3 px-4 flex justify-around items-center shadow-lg z-50 mobile-bottom-nav">
          <Link href="/spaces" className="flex flex-col items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-xs mt-1">Search</span>
          </Link>
          
          <Link href="/favorite" className="flex flex-col items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs mt-1">Favorites</span>
          </Link>
          
          <Link href="/bookings" className="flex flex-col items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h18v18H3z" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
            <span className="text-xs mt-1">Cart</span>
          </Link>
          
          <Link href="/dashboard" className="flex flex-col items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </nav>
      </>
    );
  }

  // Desktop version (original page)
  return (
    <>
      <div className="my-6">
        <HeroSection />
      </div>
      
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6">Consultories</h2>
        <ConsultoriesList />
      </section>
      
      <section className="my-12 bg-gray-50 py-10 rounded-3xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 px-4">
            <h2 className="text-2xl font-bold mb-4">Are you a mental health professional?</h2>
            <p className="text-gray-700 mb-6 text-sm md:text-base">
              Join our community and find the perfect space for your professional practice. 
              We have a wide variety of consultories designed specifically for therapists, 
              psychologists, and other mental health professionals.
            </p>
            <Link 
              href="/register" 
              className="inline-block px-6 py-3 bg-[var(--primary-text-color)] text-white font-bold rounded-full hover:bg-[var(--primary-hover)] transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/3 px-4">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-bold mb-4">Benefits</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--primary-text-color)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Professional and welcoming spaces</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--primary-text-color)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--primary-text-color)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>No long-term commitments</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--primary-text-color)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Join a community of professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}