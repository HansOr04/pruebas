// Tipos comunes y utilitarios
export interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export interface MobileSearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export interface MobileHeaderProps {
  title: string;
  onMenuToggle?: () => void;
}

// Tipos genéricos reutilizables
export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
