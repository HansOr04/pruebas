// Tipos para espacios
export interface Space {
  id: string;
  name: string;
  image: string;
  isFavorite: boolean;
}

// Tipos para componentes de espacios
export interface FavoriteCardProps {
  space: Space;
  onToggleFavorite?: (id: string) => void;
}

export interface FavoriteGridProps {
  spaces: Space[];
  onToggleFavorite?: (id: string) => void;
}

export interface DesktopSpaceDetailsProps {
  space: Space;
}

export interface MobileSpaceDetailsProps {
  space: Space;
}
