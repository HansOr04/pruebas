# Estructura de Mocks

Esta carpeta contiene todos los datos mock y funciones utilitarias organizados por dominio para facilitar el desarrollo y testing.

## 📁 Estructura de Carpetas

```
src/mocks/
├── auth/
│   └── auth.mock.ts            # Mocks de usuarios y autenticación
├── consultories/
│   └── consultory.mock.ts      # Mocks de consultorios
├── spaces/
│   └── space.mock.ts           # Mocks de espacios
├── index.ts                    # Re-exporta todos los mocks
└── README.md                   # Esta documentación
```

## 🎯 Cómo Usar

### Importación Específica (Recomendada)

```typescript
// Mocks de consultorios
import {
  consultoriesMockData,
  getConsultoryById,
} from '@/src/mocks/consultories/consultory.mock';

// Mocks de espacios
import { spacesMockData, getSpaceById } from '@/src/mocks/spaces/space.mock';

// Mocks de autenticación
import { usersMockData, loginResponseMock } from '@/src/mocks/auth/auth.mock';
```

### Importación con Alias

```typescript
// Usando alias para mejor legibilidad
import { consultories, spaces, users } from '@/src/mocks';
```

### Importación General

```typescript
// Importar todos los mocks
import * as mocks from '@/src/mocks';
```

## 📋 Dominios de Mocks

### 🔐 **Auth** (`/auth/auth.mock.ts`)

- Datos de usuarios mock
- Respuestas de login simuladas
- Utilidades para buscar usuarios

```typescript
export const usersMockData: User[];
export const loginResponseMock: LoginResponse;
export const getUserById: (id: string) => User | undefined;
export const getUserByEmail: (email: string) => User | undefined;
```

### 🏢 **Consultories** (`/consultories/consultory.mock.ts`)

- Datos de consultorios mock
- Funciones para manipular favoritos
- Utilidades de búsqueda

```typescript
export const consultoriesMockData: Consultory[];
export const getConsultoryById: (id: string) => Consultory | undefined;
export const toggleFavorite: (id: string) => Consultory[];
```

### 🏠 **Spaces** (`/spaces/space.mock.ts`)

- Datos de espacios mock
- Funciones para manipular favoritos de espacios
- Utilidades de búsqueda

```typescript
export const spacesMockData: Space[];
export const getSpaceById: (id: string) => Space | undefined;
export const toggleSpaceFavorite: (id: string) => Space[];
```

## ✅ Buenas Prácticas

1. **Nombres descriptivos**: Usar `[domain].mock.ts` en lugar de `index.ts`
2. **Consistencia**: Seguir las mismas convenciones de nomenclatura
3. **Tipos fuertes**: Siempre tipar los mocks con las interfaces correspondientes
4. **Funciones utilitarias**: Incluir funciones helpers para manipular los datos
5. **Documentación**: Comentar datos complejos o específicos

## 🔄 Migración

Para migrar del archivo `mockData.ts` antiguo:

```typescript
// ❌ Antiguo
import { consultories, getConsultoryById } from '@/app/shared/utils/mockData';

// ✅ Nuevo
import {
  consultoriesMockData as consultories,
  getConsultoryById,
} from '@/src/mocks/consultories/consultory.mock';
```

## 📝 Ejemplos de Uso

### Agregar nuevos mocks

```typescript
// src/mocks/payments/payment.mock.ts
import { Payment } from '@/src/types/payments/payment.types';

export const paymentsMockData: Payment[] = [
  {
    id: '1',
    amount: 100,
    currency: 'USD',
    status: 'completed',
  },
];

export const getPaymentById = (id: string): Payment | undefined => {
  return paymentsMockData.find((payment) => payment.id === id);
};
```

### Usar en componentes

```typescript
// En un componente
import { consultoriesMockData } from '@/src/mocks/consultories/consultory.mock';

function ConsultoriesList() {
  const [consultories, setConsultories] = useState(consultoriesMockData);
  // ...
}
```

### Usar en tests

```typescript
// En tests
import { usersMockData, loginResponseMock } from '@/src/mocks/auth/auth.mock';

describe('AuthService', () => {
  test('should login user', () => {
    const mockUser = usersMockData[0];
    // test logic...
  });
});
```

## 🎯 Ventajas de Esta Estructura

### ✅ **Organización Clara**

- Mocks agrupados por dominio
- Fácil encontrar datos específicos
- Estructura escalable

### ✅ **Reutilización**

- Mocks compartidos entre componentes
- Funciones utilitarias consistentes
- Evita duplicación de datos

### ✅ **Mantenimiento**

- Un lugar para actualizar datos mock
- Cambios centralizados
- Tipado fuerte previene errores

### ✅ **Testing**

- Datos consistentes para tests
- Fácil crear nuevos escenarios
- Aislamiento de dependencias

Esta estructura facilita el desarrollo, testing y mantenimiento de la aplicación.
