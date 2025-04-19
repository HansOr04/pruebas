import React from 'react';
import HeroSection from '@/app/(pages)/home/components/HeroSection';
import ConsultoriesList from '@/app/(pages)/home/components/ConsultoriesList';
import Footer from '@/app/components/shared/navigation/Footer';

export default function Home() {
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
            <a 
              href="/register" 
              className="inline-block px-6 py-3 bg-[var(--primary-text-color)] text-white font-bold rounded-full hover:bg-[var(--primary-hover)] transition-colors"
            >
              Get Started
            </a>
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