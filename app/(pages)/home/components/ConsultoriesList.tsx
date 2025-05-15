"use client"
import React, { useState, useEffect } from 'react';
import ConsultoryCard from './ConsultoryCard';
import { Consultory, consultories as mockConsultories } from '@/app/shared/utils/mockData';

interface ConsultoriesListProps {
  initialConsultories?: Consultory[];
  searchTerm?: string;
  favoritesOnly?: boolean;
}

const ConsultoriesList: React.FC<ConsultoriesListProps> = ({
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
      <div className="text-center py-16">
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No consultories found</h3>
        <p className="text-gray-500">
          {favoritesOnly 
            ? "You haven't added any consultories to your favorites yet." 
            : "Try adjusting your search criteria."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredConsultories.map(consultory => (
        <ConsultoryCard 
          key={consultory.id} 
          consultory={consultory} 
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </div>
  );
};

export default ConsultoriesList;