// app/spaces/[id]/page.tsx
import React, { Suspense } from 'react';
import OfficeDetailsPage from './components/OfficeDetailsPage';

// Componente de carga para Suspense
const SpaceDetailsLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-text-color)]"></div>
  </div>
);

export default function SpaceDetailPage() {
  return (
    <Suspense fallback={<SpaceDetailsLoading />}>
      <OfficeDetailsPage />
    </Suspense>
  );
}