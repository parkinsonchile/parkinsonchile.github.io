# Parkinson Chile: rediseño del sitio (propuesta, noviembre 2026)

## Qué hay en esta carpeta

| Carpeta / archivo | Qué es |
|---|---|
| `sitio-nuevo/` | **El sitio nuevo, listo para ver o publicar.** Abrir `sitio-nuevo/index.html` en el navegador. |
| `sitio-nuevo/descargas/` | Los 10 PDF descargables (se generan solos). |
| `generador/contenido.mjs` | **Todos los textos del sitio y de los PDF.** Para cambiar un texto se edita aquí. |
| `generador/` (resto) | Plantillas que arman las páginas y los PDF. |
| `_fuente_original/` | El código del sitio actual (descomprimido del zip 09). No se modificó. |
| Archivos 01–09 | El paquete de traspaso original. No se modificaron. |

## Cómo actualizar un texto

1. Editar `generador/contenido.mjs`.
2. En una terminal, dentro de la carpeta `Parkinson Web`, ejecutar: `node generador/build.mjs`
3. Se regeneran las 9 páginas y los 10 PDF (los PDF usan Edge o Chrome instalado en el equipo).

## Cómo publicarlo

`sitio-nuevo/` es un sitio estático (HTML, CSS y JS, sin base de datos): se puede subir tal cual a cualquier hosting
(Cloudflare Pages, Netlify, Hostinger, etc.). Google Analytics (G-S5HH39X5H3) y Tag Manager (GTM-5TK657J4) ya están
incluidos y solo se activan cuando el sitio corre en parkinsonchile.org.

El sitio actual está publicado en la plataforma "Sites" de ChatGPT sobre Cloudflare. Para reemplazarlo se necesita
acceso al dominio/DNS de parkinsonchile.org (ver documento maestro, sección 7).
