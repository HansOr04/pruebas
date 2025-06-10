import FavoriteCard from '@/src/components/ui/Cards/FavoriteCard';
import { Space } from '@/src/types/spaces/space.types';

interface FavoriteGridProps {
  spaces: Space[];
  onRemove: (id: string) => void;
}

export default function FavoriteGrid({ spaces, onRemove }: FavoriteGridProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {spaces.map((space) => (
        <FavoriteCard key={space.id} space={space} onRemove={onRemove} />
      ))}
    </div>
  );
}
