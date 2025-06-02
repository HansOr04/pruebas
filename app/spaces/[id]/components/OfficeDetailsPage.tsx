// app/spaces/[id]/components/OfficeDetailsPage.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getSpaceById } from '@/src/mocks/spaces/space.mock';
import { Space } from '@/src/types/spaces/space.types';
import MobileSpaceDetails from '../mobile/MobileSpaceDetails';
import DesktopSpaceDetails from './DesktopSpaceDetails';

export default function OfficeDetailsPage() {
  const params = useParams();
  const [space, setSpace] = useState<Space | null>(null);
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

    // Find the space by ID
    const id = Array.isArray(params.id) ? params.id[0] : (params.id as string);
    const found = getSpaceById(id);

    if (found) {
      setSpace(found);
    }

    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [params]);

  // Show nothing during SSR to prevent hydration issues
  if (!isClient) {
    return null;
  }

  if (!space) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  // Render mobile or desktop version based on screen size
  if (isMobile) {
    return <MobileSpaceDetails space={space} />;
  }

  return <DesktopSpaceDetails space={space} />;
}
