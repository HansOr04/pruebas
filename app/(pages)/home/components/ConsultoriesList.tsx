// app/(pages)/home/components/ConsultoriesList.tsx
"use client";

import React, { useState, useEffect } from "react";
import ConsultoryCard from "./ConsultoryCard";
import {
  Consultory,
  consultories as mockConsultories,
} from "@/app/shared/utils/mockData";

interface ConsultoriesListProps {
  initialConsultories?: Consultory[];
  searchTerm?: string;
  favoritesOnly?: boolean;
}

const ConsultoriesList: React.FC<ConsultoriesListProps> = ({
  initialConsultories,
  searchTerm = "",
  favoritesOnly = false,
}) => {
  const [consultories, setConsultories] = useState<Consultory[]>(
    initialConsultories || mockConsultories
  );
  const [filteredConsultories, setFilteredConsultories] =
    useState<Consultory[]>(consultories);

  useEffect(() => {
    let filtered = consultories;

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (consultory) =>
          consultory.name.toLowerCase().includes(term) ||
          consultory.address.toLowerCase().includes(term) ||
          consultory.city.toLowerCase().includes(term)
      );
    }

    // Filter by favorites
    if (favoritesOnly) {
      filtered = filtered.filter((consultory) => consultory.isFavorite);
    }

    setFilteredConsultories(filtered);
  }, [consultories, searchTerm, favoritesOnly]);

  const handleToggleFavorite = (id: string) => {
    setConsultories((prev) =>
      prev.map((consultory) =>
        consultory.id === id
          ? { ...consultory, isFavorite: !consultory.isFavorite }
          : consultory
      )
    );
  };

  if (filteredConsultories.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          No se encontraron resultados
        </h3>
        <p className="text-gray-500">
          {favoritesOnly
            ? "Aún no has añadido ningún consultorio a tus favoritos."
            : "Intenta ajustar tus criterios de búsqueda."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredConsultories.map((consultory) => (
        <div key={consultory.id} className="h-52">
          <ConsultoryCard
            key={consultory.id}
            consultory={consultory}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>
      ))}
    </div>
  );
};

export default ConsultoriesList;
