# Landing para galería de arte personal

## Objetivo

Crear una landing/mini‑sitio para un artista, enfocada en:
- Presentar una selección de obras (no catálogo completo).
- Mostrar información de contacto (teléfono, email, redes sociales).
- Servir como destino de un QR impreso en tarjetas de visita.
- Cuidar mucho el diseño visual, animaciones y la experiencia en móvil.
- Buen SEO para búsquedas relacionadas con el nombre del artista y su actividad.

## Público objetivo

- Personas que reciben la tarjeta de visita y escanean el QR.
- Potenciales clientes/galerías que buscan el nombre del artista en Google.
- Uso principal en móvil, pero debe verse bien en escritorio.

## Stack técnico deseado

- Frontend: Next.js (App Router) + React.
- Rendering: preferencia por SSG (static) para la mayoría de páginas.
- Animaciones: Framer Motion (y posibilidad de GSAP más adelante).
- Despliegue: Vercel u otro hosting optimizado para Next.
- Sin backend propio al inicio; posibilidad de integrar servicios externos de formularios.

## Estructura de páginas

1. `/` (Home)
   - Hero con:
     - Nombre del artista.
     - Tagline breve (1–2 frases).
     - Imagen destacada de una obra o composición visual.
   - Mini galería de “obras destacadas”:
     - 6–12 obras máximo.
     - Cada obra: imagen, título, técnica/año opcional.
     - Layout tipo grid o carrusel.
   - Sección “Sobre mí”:
     - Foto o avatar.
     - 1–2 párrafos cortos de bio.
   - Sección de contacto:
     - Email (clicable).
     - Teléfono (tel: link).
     - Enlaces a redes sociales (Instagram, etc.).
     - Botón a un formulario de contacto simple.
   - Footer con datos básicos y copyright.

2. `/obra/[slug]` (opcional, detalle de obra)
   - Plantilla para mostrar:
     - Imagen grande de la obra.
     - Título.
     - Técnica, dimensiones, año.
     - Texto breve sobre la obra (opcional).
   - Botón de “volver a la galería”.
   - No hace falta para MVP, pero dejar la estructura lista.

3. `/contacto` (opcional, formulario)
   - Formulario con campos:
     - Nombre.
     - Email.
     - Mensaje.
   - Envío a servicio externo (endpoint configurable) para no depender de backend propio.
   - Feedback visual de envío correcto/error.

## SEO y metadatos

- Títulos y descripciones específicos por página:
  - Home: nombre del artista + “artista plástico”, “pintura”, etc.
  - Obras (si existen páginas de detalle): título de la obra + nombre artista.
- Open Graph y Twitter Cards:
  - Imagen destacada para compartir (por defecto una obra o collage).
- URL amigables:
  - Slugs legibles para obras (`/obra/nombre-de-la-obra`).
- Core Web Vitals:
  - Uso de imágenes optimizadas (Next Image).
  - Carga rápida en móvil.
  - Minimizar JS innecesario.

## Diseño y UX

- Estilo visual:
  - Minimalista, dejando protagonismo a las obras.
  - Paleta de colores neutra con acentos que encajen con el estilo del artista.
- Layout:
  - Responsive first: diseño optimizado para móvil, expandido a tablet y desktop.
  - Navegación sencilla (pocas opciones en la cabecera).
- Tipografía:
  - Una tipografía principal legible y elegante.
  - Opcionalmente una secundaria para títulos.
- Accesibilidad:
  - Contraste suficiente.
  - Texto alternativo para las imágenes de las obras.
  - Navegación con teclado razonable.

## Animaciones y microinteracciones

- Transiciones de página suaves (Framer Motion).
- Animaciones al hacer scroll:
  - Fade‑in/slide‑in de secciones (hero, galería, sobre mí).
- Hover states:
  - Efectos sutiles en las tarjetas de obras (scale ligero, sombra, overlay con título).
- Carrusel o slider para obras destacadas:
  - Animaciones fluidas, sin ser estridentes.
- Posible uso futuro de GSAP para:
  - Hero más artístico (parallax, movimientos suaves de elementos).

## Integración con QR

- URL principal que irá en el QR: la home `/`.
- Asegurarse de:
  - Carga muy rápida en 3G/4G.
  - Contenido clave visible sin hacer demasiado scroll (nombre, ejemplo de obras, contacto).
- Posibilidad de:
  - Detectar si viene desde QR (UTM u otro parámetro) para ajustar algún detalle (opcional).

## Formularios y contacto (sin backend propio)

- Implementar formulario de contacto que:
  - Haga POST a un servicio externo (configurable por env vars).
  - Tenga validación básica en el cliente.
- Además del formulario, incluir:
  - Links `mailto:` para abrir cliente de correo.
  - Links `tel:` para llamar desde móvil.
  - Link a WhatsApp (`https://wa.me/...`) si aplica.

## Escalabilidad futura

Dejar preparado el proyecto para poder añadir:

- Sección de “colecciones” o “series” de obras.
- Blog/noticias (exposiciones, ferias, nuevos trabajos).
- Pequeño panel (aunque sea manual en código) para añadir nuevas obras fácilmente.
- Posible integración futura con un mini CMS headless (ej. contenido de galería desde JSON o API externa).

## Entregables esperados del agente

- Proyecto base Next.js configurado con:
  - Estructura de rutas descrita.
  - Layout global, tipografías y tema básico.
  - Componentes para:
    - Hero.
    - Grid/carrusel de obras.
    - Sección “Sobre mí”.
    - Sección de contacto.
  - Integración de Framer Motion para transiciones y animaciones.
- Sistema sencillo de datos:
  - Lista de obras en un JSON/TS (o similar) para poder añadir/modificar sin tocar demasiadas partes.
- Hooks o configuración para:
  - SEO (títulos, descripciones, OG tags).
  - Endpoint de formularios configurable vía variables de entorno.
