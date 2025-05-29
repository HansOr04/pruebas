# Estructura de Tipos TypeScript

Esta carpeta contiene todos los tipos TypeScript organizados por dominio para facilitar el mantenimiento y la escalabilidad.

## 📁 Estructura de Carpetas

```
src/types/
├── auth/
│   └── auth.types.ts       # Tipos de autenticación
├── components/
│   └── ui.types.ts         # Tipos de componentes UI
├── consultories/
│   └── consultory.types.ts # Tipos de consultorios
├── spaces/
│   └── space.types.ts      # Tipos de espacios
├── common/
│   └── common.types.ts     # Tipos comunes/globales
├── api/
│   └── api.types.ts        # Tipos de respuestas de API
├── index.ts                # Re-exporta todos los tipos
└── interface.ts            # DEPRECATED - mantener para retrocompatibilidad
```

## 🎯 Cómo Usar

### Importación Específica (Recomendada)

```typescript
// Tipos de autenticación
import {
  LoginResponse,
  User,
  FormInputProps,
} from '@/src/types/auth/auth.types';

// Tipos de componentes
import { ButtonProps, NavbarProps } from '@/src/types/components/ui.types';

// Tipos de consultorios
import {
  Consultory,
  ConsultoryCardProps,
} from '@/src/types/consultories/consultory.types';

// Tipos de espacios
import { Space, FavoriteCardProps } from '@/src/types/spaces/space.types';

// Tipos comunes
import { SearchBoxProps, Status } from '@/src/types/common/common.types';

// Tipos de API
import { PaginatedResponse, ErrorResponse } from '@/src/types/api/api.types';
```

### Importación General

```typescript
// Importar todos los tipos (menos eficiente)
import { LoginResponse, ButtonProps, Consultory } from '@/src/types';
```

## 📋 Dominios de Tipos

### 🔐 **Auth** (`/auth/auth.types.ts`)

- Autenticación y autorización
- Formularios de login/register
- Respuestas de API de auth
- Tipos de usuario

### 🧩 **Components** (`/components/ui.types.ts`)

- Props de componentes UI
- Componentes de layout
- Componentes de navegación
- Componentes reutilizables

### 🏢 **Consultories** (`/consultories/consultory.types.ts`)

- Datos de consultorios
- Props de componentes relacionados
- Tipos de disponibilidad y amenidades

### 🏠 **Spaces** (`/spaces/space.types.ts`)

- Datos de espacios
- Props de componentes de espacios
- Tipos de favoritos

### 🌐 **Common** (`/common/common.types.ts`)

- Tipos compartidos entre dominios
- Utilidades generales
- Props de componentes comunes

### 📡 **API** (`/api/api.types.ts`)

- Respuestas de API
- Tipos de paginación
- Manejo de errores

## ✅ Buenas Prácticas

1. **Importación específica**: Usar importaciones específicas del dominio
2. **Nombrado consistente**: Seguir convenciones de nomenclatura
3. **Documentación**: Comentar tipos complejos
4. **Reutilización**: Evitar duplicar tipos similares
5. **Organización**: Mantener tipos relacionados juntos
6. **Nombres descriptivos**: Usar nombres específicos como `auth.types.ts` en lugar de `index.ts`

### Extender tipos existentes

```typescript
// src/types/consultories/extended.types.ts
import { Consultory } from './consultory.types';

export interface ConsultoryWithReviews extends Consultory {
  reviews: Review[];
  averageRating: number;
}
```

Esta estructura facilita el mantenimiento, mejora la organización y hace el código más escalable y comprensible.
