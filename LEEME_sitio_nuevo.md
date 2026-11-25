# Parkinson Chile: rediseño del sitio (propuesta, noviembre 2026)

## Qué hay en esta carpeta

| Carpeta / archivo | Qué es |
|---|---|
| `sitio-nuevo/` | **El sitio nuevo, listo para ver o publicar.** Abrir `sitio-nuevo/index.html` en el navegador. |
| `sitio-nuevo/descargas/` | Los 11 PDF descargables (se generan solos). |
| `generador/contenido.mjs` | **Todos los textos del sitio y de los PDF.** Para cambiar un texto se edita aquí. |
| `generador/` (resto) | Plantillas que arman las páginas y los PDF. |
| `_fuente_original/` | El código del sitio actual (descomprimido del zip 09). No se modificó. |
| Archivos 01–09 | El paquete de traspaso original. No se modificaron. |

## Cómo actualizar un texto

1. Editar `generador/contenido.mjs`.
2. En una terminal, dentro de la carpeta `Parkinson Web`, ejecutar: `node generador/build.mjs`
3. Se regeneran las 10 páginas y los 11 PDF (los PDF usan Edge o Chrome instalado en el equipo).
4. Para verlo en el computador: `node generador/servidor.mjs` y abrir http://localhost:8080

## Dónde está publicado

- Código: organización de GitHub **parkinsonchile** (separada de cualquier otro proyecto),
  repositorio https://github.com/parkinsonchile/parkinsonchile.github.io
- Sitio de revisión: **https://parkinsonchile.github.io** (marcado para que Google no lo indexe mientras es prototipo).
- Cada vez que se sube un cambio a la rama `main`, GitHub publica solo la carpeta `sitio-nuevo/`
  (`.github/workflows/pages.yml`). Tarda 1–2 minutos.
- Solo se suben `sitio-nuevo/`, `generador/` y este archivo. Los documentos de traspaso, `_fuente_original/` y los
  zip quedan fuera a propósito (`.gitignore`).

Para publicar un cambio: regenerar (paso 2 de arriba), luego `git add -A`, `git commit -m "qué cambió"` y `git push`.

## El dominio parkinsonchile.org (todavía no se ha cambiado)

Hoy parkinsonchile.org sigue apuntando al sitio antiguo en ChatGPT Sites. El DNS lo administra DonWeb/Hostmar, que
**también aloja el correo** (registros MX `mail` y `mx1`, SPF y DMARC): esos registros no se tocan nunca.

Cuando el dueño apruebe el cambio:
1. Poner `PROTOTIPO = false` en `generador/contenido.mjs` y regenerar (si no, Google dejaría de mostrar la página).
2. En GitHub → repositorio → Settings → Pages → Custom domain: `parkinsonchile.org`.
3. En DonWeb cambiar solo dos cosas: el registro A de `parkinsonchile.org` (hoy 162.159.143.30 y 172.66.3.26) por las
   4 IP de GitHub (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153), y el CNAME de `www`
   (hoy custom-domains.chatgpt.site) por `parkinsonchile.github.io`.
4. Activar "Enforce HTTPS" en GitHub cuando aparezca disponible, y probar el correo de contacto@.
5. No borrar el sitio de ChatGPT hasta un mes después, por si hay que volver atrás.

Google Analytics (G-S5HH39X5H3) y Tag Manager (GTM-5TK657J4) ya están incluidos y solo se activan en parkinsonchile.org.
