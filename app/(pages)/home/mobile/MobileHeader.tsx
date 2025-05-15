// app/components/mobile/MobileHeader.tsx
import React from 'react';
import Link from 'next/link';

interface MobileHeaderProps {
  title?: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ 
  title = "MindNest" 
}) => {
  return (
    <header className="py-4 px-4">
      <Link href="/" className="inline-block">
        <h1 className="text-2xl font-bold">
          Mind<span className="text-[var(--primary-text-color)]">Nest</span>
        </h1>
      </Link>
      {title !== "MindNest" && (
        <h2 className="text-lg font-medium mt-1">{title}</h2>
      )}
    </header>
  );
};

export default MobileHeader;