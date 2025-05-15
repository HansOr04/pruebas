// app/shared/utils/deviceRedirect.ts
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '../../components/shared/hooks/useMediaQuery';

/**
 * Hook to redirect users based on their device type
 * @param mobileRoute Path to redirect to on mobile devices
 * @param desktopRoute Path to redirect to on desktop devices
 */
export function useDeviceRedirect(mobileRoute: string, desktopRoute: string) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const router = useRouter();
  
  useEffect(() => {
    if (isMobile) {
      router.push(mobileRoute);
    } else {
      router.push(desktopRoute);
    }
  }, [isMobile, mobileRoute, desktopRoute, router]);
}

/**
 * Component that redirects based on device type
 */
export function DeviceRedirect({ 
  mobileRoute, 
  desktopRoute 
}: { 
  mobileRoute: string, 
  desktopRoute: string 
}) {
  useDeviceRedirect(mobileRoute, desktopRoute);
  return null;
}