// app/home/components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import SearchBox from './SearchBox';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Find the",
  subtitle = "At MindNest, we understand the importance of having the right space to provide mental support services. We know that your work as a mental health professional requires an environment that inspires confidence, tranquility and comfort for both you and your patients."
}) => {
  return (
    <section className="bg-gray-50 rounded-3xl overflow-hidden my-6">
      <div className="container mx-auto py-12 px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0">
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg max-w-lg">
              {subtitle}
            </p>
            
            <SearchBox 
              placeholder="Choose the place" 
              className="max-w-md"
            />
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-96 md:h-[450px]">
              <Image
                src="https://images.pexels.com/photos/5825400/pexels-photo-5825400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Consultory interior"
                fill
                className="object-cover"
              />
              
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-full shadow-lg">
                <div className="font-bold text-[var(--primary-text-color)] text-base">
                  MINDNEST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;