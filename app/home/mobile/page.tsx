// app/(pages)/home/mobile/page.tsx
'use client';
import React from 'react';
import { useMediaQuery } from '@/app/components/shared/hooks/useMediaQuery';
import MobileHeader from '@/app/(pages)/home/mobile/MobileHeader';
import MobileSearchBox from '@/app/(pages)/home/mobile/MobileSearchBox';
import MobileConsultoriesList from '@/app/(pages)/home/mobile/MobileConsultoriesList';
import MobileBottomNav from '@/app/components/shared/navigation/mobile/MobileBottomNav';
import { useRouter } from 'next/navigation';

export default function MobileHomePage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const router = useRouter();

  // Redirect to desktop version if not mobile
  React.useEffect(() => {
    if (!isMobile) {
      router.push('/home');
    }
  }, [isMobile, router]);

  if (!isMobile) return null;

  return (
    <div className="pb-20">
      {' '}
      {/* Add padding to bottom for the nav bar */}
      <MobileHeader />
      <div className="px-4 mb-6">
        <MobileSearchBox />
      </div>
      <MobileConsultoriesList />
      <MobileBottomNav />
    </div>
  );
}
