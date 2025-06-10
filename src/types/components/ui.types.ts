// Tipos para componentes UI generales
export interface ButtonProps {
  content: string;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Tipos para componentes de navegación
export interface NavbarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

// Tipos para componentes de UI
export interface RatingDisplayProps {
  rating: number;
  reviewCount?: number;
  showCount?: boolean;
}

export interface ProfilePicProps {
  src?: string;
  alt: string;
  userName: string;
  size?: string;
}

// Tipos para componentes de layout
export interface AuthLayoutProps {
  children: React.ReactNode;
  logoType?: 'text' | 'image';
}
