# YRELIS CoffeeBar — sitio en React

Rediseño completo del sitio de YRELIS CoffeeBar (Gamarra, La Victoria — Lima) construido
como una app estática en **React + Vite + React Router**, con diseño propio, responsive
y optimizado para producción.

## Contenido

- **Inicio** — hero, bienvenida, tarjeta de cliente frecuente y carrusel de anuncios.
- **Menú** — las 18 categorías completas del menú original, con buscador y filtros por categoría.
- **Promociones** — tarjetas de Happy Hour.
- **Nosotros** — historia, servicios y valores.
- **Contacto** — datos de contacto, formulario y mapa embebido.
- Botón flotante de WhatsApp y navegación responsive en todas las páginas.

## Cómo usarlo

Requiere [Node.js](https://nodejs.org/) 18 o superior.

```bash
# 1. Instalar dependencias
npm install

# 2. Modo desarrollo (con recarga en vivo)
npm run dev

# 3. Generar el sitio estático de producción
npm run build
# El resultado queda en la carpeta /dist, listo para subir a cualquier hosting estático
# (Netlify, Vercel, GitHub Pages, hosting compartido, etc.)

# 4. Previsualizar el build de producción localmente
npm run preview
```

## Estructura

```
src/
  components/   Navbar, Footer, botón de WhatsApp, sello, carrusel, tarjeta de sellos
  pages/        Home, Menu, About, Contact, Promotions
  data/         menu.js — contenido del menú, editable sin tocar el diseño
  assets/       logo, imágenes de promociones y video
  index.css     tokens de diseño (colores, tipografía, espaciados)
```

## Editar contenido

- **Precios y platos del menú:** edita `src/data/menu.js`.
- **Datos de contacto / redes:** edita el arreglo `INFO` en `src/pages/Contact.jsx`.
- **WhatsApp:** el número está en `src/components/WhatsappButton.jsx` y en `src/pages/Contact.jsx`.
- **Colores y tipografía:** variables CSS en `src/index.css` (`:root`).
