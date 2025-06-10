'use client';

import { useEffect, useState } from 'react';
import FavoriteList from '@/src/components/ui/Lists/FavoriteList';
import { Space } from '@/src/types/spaces/space.types';
import axios from 'axios';
import { SkeletonCard } from '@/src/components/ui/Cards/SkelentonCard';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.minest.com';

const mockFavorites: Space[] = [
  {
    id: '1',
    name: 'San Patricio',
    image: '/spaces/sanpatricio.jpg',
    isFavorite: true,
  },
  {
    id: '2',
    name: 'La Carolina',
    image: '/spaces/lacarolina.jpg',
    isFavorite: true,
  },
  { id: '3', name: 'Puembo', image: '/spaces/puembo.jpg', isFavorite: true },
  { id: '4', name: 'Puembo', image: '/spaces/puembo.jpg', isFavorite: true },
  { id: '5', name: 'Puembo', image: '/spaces/puembo.jpg', isFavorite: true },
  { id: '6', name: 'Puembo', image: '/spaces/puembo.jpg', isFavorite: true },
  { id: '7', name: 'Puembo', image: '/spaces/puembo.jpg', isFavorite: true },
];

export default function FavoritePage() {
  const [favorites, setFavorites] = useState<Space[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`${API_URL}/favorites`);
        setFavorites(res.data);
      } catch (error) {
        console.warn('Fallo la API', error);
        setFavorites(mockFavorites);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/favorites/${id}`);
    } catch {
      console.warn(`Simulando eliminación de favorito con ID ${id}`);
    }

    setFavorites((prev) => prev.filter((space) => space.id !== id));
  };

  if (loading)
    return (
      <div className="flex flex-wrap mt-40">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Tus Favoritos</h2>
      <FavoriteList spaces={favorites} onRemove={handleRemoveFavorite} />
    </div>
  );
}
