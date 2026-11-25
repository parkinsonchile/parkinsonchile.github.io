// Genera el sitio y los PDF de Parkinson Chile.
// Uso:  node generador/build.mjs          (páginas + PDF)
//       node generador/build.mjs --sin-pdf (solo páginas)
import { writeFileSync, mkdirSync, existsSync, rmSync, statSync } from "node:fs";
const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { tmpdir } from "node:os";
import { paginas } from "./paginas.mjs";
import { pdfs } from "./pdfs.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const site = join(here, "..", "sitio-nuevo");
const pdfSrc = join(here, "_pdf");
const pdfOut = join(site, "descargas");
mkdirSync(pdfSrc, { recursive: true });
mkdirSync(pdfOut, { recursive: true });

for (const [file, fn] of Object.entries(paginas)) {
  writeFileSync(join(site, file), fn(), "utf8");
  console.log("página  ", file);
}

if (process.argv.includes("--sin-pdf")) process.exit(0);

const browsers = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
];
const browser = browsers.find((b) => existsSync(b));
if (!browser) { console.error("No se encontró Edge ni Chrome para generar los PDF."); process.exit(1); }
const profile = join(tmpdir(), "pc-pdf-profile");

for (const [id, fn] of Object.entries(pdfs)) {
  const src = join(pdfSrc, `${id}.html`);
  const out = join(pdfOut, `${id}.pdf`);
  writeFileSync(src, fn(), "utf8");
  if (existsSync(out)) rmSync(out);
  execFileSync(browser, [
    "--headless=new", "--disable-gpu", "--no-first-run", "--no-pdf-header-footer",
    `--user-data-dir=${profile}`, "--virtual-time-budget=8000", "--run-all-compositor-stages-before-draw",
    `--print-to-pdf=${out}`, pathToFileURL(src).href,
  ], { stdio: "ignore", timeout: 90000 });
  // En Windows el navegador puede terminar de escribir después de devolver el control.
  let last = -1, stable = 0;
  for (let t = 0; t < 120 && stable < 3; t++) {
    sleep(500);
    const size = existsSync(out) ? statSync(out).size : -1;
    stable = size > 0 && size === last ? stable + 1 : 0;
    last = size;
  }
  console.log(stable >= 3 ? "pdf     " : "FALLÓ   ", `${id}.pdf`, last > 0 ? `(${Math.round(last / 1024)} KB)` : "");
}
