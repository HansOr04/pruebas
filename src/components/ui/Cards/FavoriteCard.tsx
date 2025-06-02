'use client';

import Image from 'next/image';
import consultingRoom from '../../../statics/consulting-room.jpeg';
import { Space } from '@/src/types/spaces/space.types';
import { useState } from 'react';

interface FavoriteCardProps {
  space: Space;
  onRemove: (id: string) => void;
}

export default function FavoriteCard({ space, onRemove }: FavoriteCardProps) {
  const [isFavorite, setIsFavorite] = useState(true);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(false);
    onRemove(space.id);
  };

  if (!isFavorite) return null;

  return (
    <article className="m-8 relative w-52">
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 p-1 bg-white rounded-full"
        aria-label="Eliminar de favoritos"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler icons-tabler-filled icon-tabler-heart"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
        </svg>
      </button>
      <Image
        className="favorite-image"
        src={consultingRoom}
        width={180}
        height={180}
        alt="Picture of the author"
      />
      <p className="">{space.name ?? 'Nombre no disponible'}</p>
    </article>
  );
}
