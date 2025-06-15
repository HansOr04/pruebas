import { Suspense } from 'react';
import SpaceDetailsContent from '../../../src/components/ui/spaces/SpaceDetailsContent';

const SpaceDetailsLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-text-color)]"></div>
  </div>
);

export default function SpaceDetailPage() {
  return (
    <Suspense fallback={<SpaceDetailsLoading />}>
      <SpaceDetailsContent />
    </Suspense>
  );
}