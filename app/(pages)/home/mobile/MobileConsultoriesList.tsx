"use client";
import React, { useState, useEffect } from 'react';
import { Consultory, consultories as mockConsultories } from '@/app/shared/utils/mockData';
import ConsultoryCard from '@/app/(pages)/home/components/ConsultoryCard';

interface MobileConsultoriesListProps {
  initialConsultories?: Consultory[];
  searchTerm?: string;
  favoritesOnly?: boolean;
}

const MobileConsultoriesList: React.FC<MobileConsultoriesListProps> = ({
  initialConsultories,
  searchTerm = "",
  favoritesOnly = false
}) => {
  const [consultories, setConsultories] = useState<Consultory[]>(initialConsultories || mockConsultories);
  const [filteredConsultories, setFilteredConsultories] = useState<Consultory[]>(consultories);

  useEffect(() => {
    let filtered = consultories;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        consultory => 
          consultory.name.toLowerCase().includes(term) ||
          consultory.address.toLowerCase().includes(term) ||
          consultory.city.toLowerCase().includes(term)
      );
    }
    
    // Filter by favorites
    if (favoritesOnly) {
      filtered = filtered.filter(consultory => consultory.isFavorite);
    }
    
    setFilteredConsultories(filtered);
  }, [consultories, searchTerm, favoritesOnly]);

  const handleToggleFavorite = (id: string) => {
    setConsultories(prev => 
      prev.map(consultory => 
        consultory.id === id 
          ? { ...consultory, isFavorite: !consultory.isFavorite } 
          : consultory
      )
    );
  };

  if (filteredConsultories.length === 0) {
    return (
      <div className="text-center py-8">
        <h3 className="text-lg font-semibold text-gray-600 mb-2">No consultories found</h3>
        <p className="text-gray-500 text-sm">
          {favoritesOnly 
            ? "You haven't added any consultories to your favorites yet." 
            : "Try adjusting your search criteria."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 px-4">
      {filteredConsultories.map(consultory => (
        <div key={consultory.id} className="mb-4">
          <ConsultoryCard 
            consultory={consultory} 
            onToggleFavorite={handleToggleFavorite}
          />
        </div>
      ))}
    </div>
  );
};

export default MobileConsultoriesList;