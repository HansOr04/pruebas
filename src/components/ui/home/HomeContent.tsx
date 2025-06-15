'use client';
import React from 'react';
import HeroSection from './HeroSection';
import ConsultoriesList from './ConsultoriesList';
import Footer from '@/app/components/shared/navigation/Footer';
import Link from 'next/link';

export default function HomeContent() {
  return (
    <>
      {/* Mobile: Header y Search - Solo en mobile */}
      <div className="md:hidden pt-4 px-4">
        <div className="text-2xl font-bold mb-6">
          Mind<span className="text-[var(--primary-text-color)]">Nest</span>
        </div>

        {/* Search box mobile */}
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

      {/* Desktop: Hero Section - Solo en desktop */}
      <div className="hidden md:block my-6">
        <HeroSection />
      </div>

      {/* Consultories List - Responsive */}
      <section className="my-10 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Consultories</h2>
        <ConsultoriesList />
      </section>

      {/* Desktop: Call to Action Section - Solo en desktop */}
      <section className="hidden md:block my-12 bg-gray-50 py-10 rounded-3xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 px-4">
            <h2 className="text-2xl font-bold mb-4">
              Are you a mental health professional?
            </h2>
            <p className="text-gray-700 mb-6 text-sm md:text-base">
              Join our community and find the perfect space for your
              professional practice. We have a wide variety of consultories
              designed specifically for therapists, psychologists, and other
              mental health professionals.
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
                  <svg
                    className="h-5 w-5 text-[var(--primary-text-color)] mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Professional and welcoming spaces</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[var(--primary-text-color)] mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[var(--primary-text-color)] mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>No long-term commitments</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[var(--primary-text-color)] mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Join a community of professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Solo en desktop */}
      <div className="hidden md:block">
        <Footer />
      </div>

      {/* Mobile: Padding para bottom nav */}
      <div className="md:hidden pb-20"></div>
    </>
  );
}