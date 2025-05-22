import FavoriteCard from './FavoriteCard';
import { Space } from '../../../types/interface';

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
