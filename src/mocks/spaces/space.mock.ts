// Mock data para espacios
import { Space } from '@/src/types/spaces/space.types';

export const spacesMockData: Space[] = [
  {
    id: '1',
    name: 'Espacio Zen',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg',
    isFavorite: true,
  },
  {
    id: '2',
    name: 'Consultorio Moderno',
    image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg',
    isFavorite: false,
  },
  {
    id: '3',
    name: 'Sala de Terapia',
    image: 'https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg',
    isFavorite: true,
  },
];

// Funciones utilitarias para espacios mock
export const getSpaceById = (id: string): Space | undefined => {
  return spacesMockData.find((space) => space.id === id);
};

export const toggleSpaceFavorite = (id: string): Space[] => {
  return spacesMockData.map((space) =>
    space.id === id ? { ...space, isFavorite: !space.isFavorite } : space
  );
};
