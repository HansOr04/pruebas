// Re-exportar todos los mocks organizados por dominio

// Mocks de autenticación
export * from './auth/auth.mock';

// Mocks de consultorios
export * from './consultories/consultory.mock';

// Mocks de espacios
export * from './spaces/space.mock';

// Exportaciones con alias para evitar conflictos de nombres
export {
  consultoriesMockData as consultories,
  getConsultoryById,
  toggleFavorite,
} from './consultories/consultory.mock';

export {
  spacesMockData as spaces,
  getSpaceById,
  toggleSpaceFavorite,
} from './spaces/space.mock';

export {
  usersMockData as users,
  loginResponseMock,
  getUserById,
  getUserByEmail,
} from './auth/auth.mock';
