# Landing Page Celulares

Este proyecto es una Landing Page moderna orientada al comercio electrónico (e-commerce) de teléfonos celulares. Está construida con las últimas tecnologías del ecosistema de React, priorizando el rendimiento, la accesibilidad y una excelente experiencia de usuario (UX/UI). El proyecto extrae datos del catálogo de forma dinámica conectándose a Shopify.

## Tecnologías Principales

El proyecto utiliza un stack moderno para el Frontend:

* **Framework:** Next.js (versión 16.3 Canary).
* **Librería Core:** React 18.2.0.
* **Lenguaje:** TypeScript, garantizando un tipado estático y código robusto.
* **Estilos:** Tailwind CSS v4 con PostCSS para un estilizado rápido y utilitario.

##  Ecosistema de Interfaz de Usuario (UI)

La interfaz se ha desarrollado utilizando componentes reutilizables y altamente accesibles:

* **Shadcn/ui:** Sistema de componentes base, configurado con el estilo `new-york` y un esquema de color `neutral`.
* **Radix UI:** Base subyacente para los componentes interactivos (Acordeones, Diálogos, Menús de navegación, Tabs, Sliders, entre otros).
* **Animaciones:** Framer Motion y Tailwind CSS Animate para transiciones fluidas.
* **Iconografía:** Lucide React y React Icons.
* **Formularios:** Validados y gestionados con React Hook Form y Zod.
* **Tipografía:** Fuente Geist integrada.
* **Temas:** Soporte para Dark/Light mode mediante `next-themes`.
* **Notificaciones:** Sonner y Radix Toast para alertas en pantalla.
* **Carruseles:** Construidos nativamente con Embla Carousel React.

## Integración E-commerce

La aplicación actúa como un frontend "headless" para gestionar el catálogo de celulares

Se han creado Hooks personalizados para manejar la carga de datos del catálogo:
* `useProducts()`: Obtiene un listado general de hasta 20 productos, manejando los estados de carga y error.
* `useProduct(handle)`: Solicita la información detallada de un solo producto basado en su "handle" o slug.
* `useCollections()`: Extrae colecciones (por ejemplo, categorías de marcas de teléfonos) desde la tienda Shopify.

## Instalación y Ejecución Local

Para levantar este proyecto en tu entorno de desarrollo:

1. Clona el repositorio e instala las dependencias.

```bash
npm install
# o con yarn
yarn install
