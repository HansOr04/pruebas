// Tipos para consultorios
export interface Availability {
  days: string[];
  hours: string[];
}

export interface Consultory {
  id: string;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  rating: number;
  imageUrl: string;
  isFavorite?: boolean;
  description?: string;
  amenities?: string[];
  pricePerHour?: number;
  price?: number; // Mantener compatibilidad con ambos componentes
  reviewCount?: number;
  availability?: Availability;
}

// Tipos para componentes de consultorios
export interface ConsultoryCardProps {
  consultory: Consultory;
  onToggleFavorite?: (id: string) => void;
}

export interface ConsultoriesListProps {
  consultories: Consultory[];
  onToggleFavorite?: (id: string) => void;
}

export interface MobileConsultoriesListProps {
  consultories: Consultory[];
}
