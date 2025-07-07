# ClubSoda - Sistema de E-commerce para San Jorge

Una aplicación web moderna de comercio electrónico desarrollada con React y TypeScript para la empresa San Jorge, especializada en productos de panadería, galletas, wafers, pastas y mermeladas.

## 🚀 Características Principales

- **Catálogo de Productos**: Navegación intuitiva con filtros por categoría y precio [1](#0-0) 
- **Sistema de Autenticación**: Registro e inicio de sesión con persistencia local [2](#0-1) 
- **Carrito de Compras**: Gestión completa de productos y cantidades
- **Páginas de Producto Individual**: Vista detallada con productos relacionados [3](#0-2) 
- **Dashboard Interactivo**: Panel principal con ofertas y productos destacados [4](#0-3) 
- **Historial de Compras**: Seguimiento completo de pedidos realizados
- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop

## 🛠️ Tecnologías Utilizadas [5](#0-4) 

- **Frontend**: React 19.1.0 + TypeScript
- **Routing**: React Router DOM 7.6.1
- **Estilos**: Tailwind CSS 4.1.8
- **UI Components**: Headless UI 2.2.4
- **Animaciones**: Framer Motion 12.16.0
- **Build Tool**: Vite 6.3.5
- **Zoom de Imágenes**: React Inner Image Zoom 4.0.1

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Icons.tsx       # Biblioteca de iconos SVG
│   ├── SelectInput.tsx # Componente de selección con búsqueda
│   └── button.tsx      # Componente de botón personalizado
├── pages/              # Páginas principales
│   ├── auth/           # Sistema de autenticación
│   ├── Products-catalog/ # Catálogo y gestión de productos
│   ├── dashboard/      # Panel principal
│   └── purchases/      # Historial de compras
├── layouts/            # Layouts de la aplicación
│   ├── layout-auth.tsx # Layout para usuarios autenticados
│   └── layout-guest.tsx # Layout para invitados
├── classes/            # Clases y servicios
│   └── AuthService.ts  # Servicio de autenticación
└── utils/              # Utilidades y helpers
```

## 🚦 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/clubsoda.git
   cd clubsoda
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

## 📋 Scripts Disponibles [6](#0-5) 

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 🎯 Funcionalidades Detalladas

### Sistema de Autenticación
- Registro de usuarios con validación completa [7](#0-6) 
- Inicio de sesión con persistencia en localStorage [8](#0-7) 
- Gestión de estado global con React Context

### Catálogo de Productos
- Más de 15 productos organizados por categorías [9](#0-8) 
- Filtros dinámicos por precio y categoría
- Vista de cuadrícula responsiva
- Búsqueda en tiempo real

### Carrito de Compras
- Agregar/quitar productos
- Modificar cantidades
- Cálculo automático de totales
- Persistencia entre sesiones

## 🎨 Sistema de Diseño

El proyecto utiliza un sistema de diseño consistente basado en:
- **Tailwind CSS** para estilos utilitarios
- **Componentes reutilizables** con props tipadas [10](#0-9) 
- **Iconografía SVG personalizada** [11](#0-10) 
- **Paleta de colores** centrada en rojos y grises para la marca San Jorge

## 🔧 Configuración de Desarrollo

### Vite Configuration [12](#0-11) 

El proyecto está configurado con Vite para un desarrollo rápido y eficiente, incluyendo:
- Hot Module Replacement (HMR)
- Optimización automática de assets
- Soporte completo para TypeScript

## 📱 Rutas de la Aplicación [13](#0-12) 

- `/` - Dashboard principal
- `/us` - Página de presentación
- `/products/catalog` - Catálogo de productos
- `/producto/:id` - Vista individual de producto
- `/purchase/new` - Nueva compra
- `/purchase/history` - Historial de compras
- `/request/new` - Nueva solicitud
- `/request/history` - Historial de solicitudes
- `/pago` - Página de pago

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a San Jorge. Todos los derechos reservados.

## 📞 Contacto

Para consultas sobre el proyecto, contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ para San Jorge** 
