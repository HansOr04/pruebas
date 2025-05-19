// app/spaces/[id]/components/OfficeDetailsPage.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Consultory, getConsultoryById } from '@/app/shared/utils/mockData';
import MobileSpaceDetails from '../mobile/MobileSpaceDetails';
import DesktopSpaceDetails from './DesktopSpaceDetails';

export default function OfficeDetailsPage() {
  const params = useParams();
  const [consultory, setConsultory] = useState<Consultory | null>(null);
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
    
    // Find the consultory by ID
    const id = Array.isArray(params.id) ? params.id[0] : params.id as string;
    const found = getConsultoryById(id);
    
    if (found) {
      setConsultory(found);
    }
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [params]);

  // Show nothing during SSR to prevent hydration issues
  if (!isClient) {
    return null;
  }

  if (!consultory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  // Render mobile or desktop version based on screen size
  if (isMobile) {
    return <MobileSpaceDetails consultory={consultory} />;
  }

  return <DesktopSpaceDetails consultory={consultory} />;
}