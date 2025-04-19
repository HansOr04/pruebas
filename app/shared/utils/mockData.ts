export interface Consultory {
    id: string;
    name: string;
    address: string;
    city: string;
    zipCode: string;
    rating: number;
    imageUrl: string;
    isFavorite?: boolean;
    description?: string;
    amenities?: string[];
    pricePerHour?: number;
    availability?: {
      days: string[];
      hours: string[];
    };
  }
  
  export const consultories: Consultory[] = [
    {
      id: "1",
      name: "La Carolina",
      address: "Calle Alfonso Pereira",
      city: "Quito",
      zipCode: "170506",
      rating: 4.2,
      imageUrl: "https://images.pexels.com/photos/221537/pexels-photo-221537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isFavorite: false,
      description: "Espacio tranquilo y profesional ideal para terapeutas y psicólogos. Ambiente cálido con decoración minimalista.",
      amenities: ["WiFi", "Recepción", "Sala de espera", "Aire acondicionado", "Acceso para discapacitados"],
      pricePerHour: 25,
      availability: {
        days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
        hours: ["8:00 - 20:00"]
      }
    },
    {
      id: "2",
      name: "La Carolina",
      address: "Calle Alfonso Pereira",
      city: "Quito",
      zipCode: "170506",
      rating: 4.2,
      imageUrl: "https://images.pexels.com/photos/263209/pexels-photo-263209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isFavorite: false,
      description: "Consultorio moderno con vista al parque La Carolina. Perfecto para profesionales de la salud mental.",
      amenities: ["WiFi", "Café y té", "Sala de espera", "Estacionamiento", "Seguridad 24h"],
      pricePerHour: 30,
      availability: {
        days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        hours: ["7:00 - 19:00"]
      }
    },
    {
      id: "3",
      name: "La Carolina",
      address: "Calle Alfonso Pereira",
      city: "Quito",
      zipCode: "170506",
      rating: 4.2,
      imageUrl: "https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isFavorite: false,
      description: "Espacio luminoso y acogedor con decoración que promueve la relajación. Excelente para psicoterapeutas.",
      amenities: ["WiFi", "Recepción", "Agua purificada", "Sistema de sonido", "Libros de referencia"],
      pricePerHour: 28,
      availability: {
        days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
        hours: ["9:00 - 21:00"]
      }
    },
    {
      id: "4",
      name: "El Batán",
      address: "Av. Eloy Alfaro",
      city: "Quito",
      zipCode: "170402",
      rating: 4.5,
      imageUrl: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg",
      isFavorite: false,
      description: "Consultorio elegante ubicado en zona exclusiva. Ideal para psicólogos y counselors con clientes exigentes.",
      amenities: ["WiFi de alta velocidad", "Recepción personalizada", "Sala de espera privada", "Café gourmet", "Estacionamiento"],
      pricePerHour: 35,
      availability: {
        days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
        hours: ["8:00 - 20:00"]
      }
    },
    {
      id: "5",
      name: "Centro Histórico",
      address: "Calle García Moreno",
      city: "Quito",
      zipCode: "170130",
      rating: 4.0,
      imageUrl: "https://images.pexels.com/photos/3932889/pexels-photo-3932889.jpeg",
      isFavorite: false,
      description: "Espacio con encanto en edificio histórico renovado. Ambiente tranquilo ideal para terapeutas.",
      amenities: ["WiFi", "Baño privado", "Sala de espera", "Cafetería cercana"],
      pricePerHour: 22,
      availability: {
        days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        hours: ["9:00 - 18:00"]
      }
    },
    {
      id: "6",
      name: "Cumbayá",
      address: "Av. Interoceánica",
      city: "Quito",
      zipCode: "170157",
      rating: 4.7,
      imageUrl: "https://images.pexels.com/photos/7168960/pexels-photo-7168960.jpeg",
      isFavorite: false,
      description: "Consultorio premium en zona residencial exclusiva. Ambiente natural y relajado ideal para terapias.",
      amenities: ["WiFi", "Jardín", "Estacionamiento privado", "Recepción", "Seguridad", "Aire acondicionado"],
      pricePerHour: 40,
      availability: {
        days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
        hours: ["8:00 - 19:00"]
      }
    }
  ];
  
  // Function to get a consultory by ID
  export const getConsultoryById = (id: string): Consultory | undefined => {
    return consultories.find(consultory => consultory.id === id);
  };
  
  // Function to toggle favorite status
  export const toggleFavorite = (id: string): Consultory[] => {
    return consultories.map(consultory => 
      consultory.id === id ? {...consultory, isFavorite: !consultory.isFavorite} : consultory
    );
  };