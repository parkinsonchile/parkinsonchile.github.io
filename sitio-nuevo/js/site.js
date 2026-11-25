/* Parkinson Chile — comportamiento del sitio (sin dependencias) */
(function () {
  "use strict";

  /* ---- Medición: solo en el dominio publicado ---- */
  var host = location.hostname;
  if (host === "parkinsonchile.org" || host === "www.parkinsonchile.org") {
    (function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
      j.async = true; j.src = "https://www.googletagmanager.com/gtm.js?id=" + i; f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-5TK657J4");
    var ga = document.createElement("script");
    ga.async = true; ga.src = "https://www.googletagmanager.com/gtag/js?id=G-S5HH39X5H3";
    document.head.appendChild(ga);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", "G-S5HH39X5H3");
  }

  /* ---- Menú móvil ---- */
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("menu-principal");
  if (toggle && nav) {
    var openLabel = toggle.querySelector(".label");
    function setMenu(open) {
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      if (openLabel) openLabel.textContent = open ? "Cerrar" : "Menú";
      toggle.querySelector(".ico-open").style.display = open ? "none" : "";
      toggle.querySelector(".ico-close").style.display = open ? "" : "none";
    }
    toggle.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); toggle.focus(); } });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    window.matchMedia("(min-width: 1121px)").addEventListener("change", function (m) { if (m.matches) setMenu(false); });
  }

  /* ---- Índice: resaltar la sección visible ---- */
  var tocLinks = document.querySelectorAll("[data-toc] a[href^='#']");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var targets = [];
    tocLinks.forEach(function (a) {
      var el = document.getElementById(a.getAttribute("href").slice(1));
      if (el && targets.indexOf(el) === -1) targets.push(el);
    });
    var current = null;
    function setActive(id) {
      if (id === current) return;
      current = id;
      tocLinks.forEach(function (a) {
        var on = a.getAttribute("href") === "#" + id;
        a.classList.toggle("is-active", on);
        if (on && a.closest(".chips")) {
          var c = a.closest(".chips");
          c.scrollTo({ left: a.offsetLeft - 16, behavior: "smooth" });
        }
      });
    }
    var io = new IntersectionObserver(function (entries) {
      var visible = entries.filter(function (e) { return e.isIntersecting; })
        .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-20% 0px -65% 0px" });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---- Pestañas ---- */
  document.querySelectorAll("[data-tabs]").forEach(function (wrap) {
    var buttons = wrap.querySelectorAll("[role='tab']");
    var panels = wrap.querySelectorAll("[role='tabpanel']");
    function select(btn, focus) {
      buttons.forEach(function (b) {
        var on = b === btn;
        b.setAttribute("aria-selected", String(on));
        b.tabIndex = on ? 0 : -1;
      });
      panels.forEach(function (p) { p.hidden = p.id !== btn.getAttribute("aria-controls"); });
      if (focus) btn.focus();
      if (wrap.hasAttribute("data-tabs-hash")) {
        try { history.replaceState(null, "", "#" + btn.getAttribute("aria-controls")); } catch (e) {}
      }
    }
    buttons.forEach(function (b, i) {
      b.addEventListener("click", function () { select(b); });
      b.addEventListener("keydown", function (e) {
        var n = null;
        if (e.key === "ArrowRight") n = buttons[(i + 1) % buttons.length];
        if (e.key === "ArrowLeft") n = buttons[(i - 1 + buttons.length) % buttons.length];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
    // Abrir la pestaña indicada en la dirección (#dbs, #hifu…)
    var h = location.hash.slice(1);
    var start = h && wrap.querySelector("[aria-controls='" + h + "']");
    if (start) select(start);
  });

  /* ---- Filtro de tablas ---- */
  document.querySelectorAll("[data-filter-for]").forEach(function (group) {
    var table = document.getElementById(group.getAttribute("data-filter-for"));
    if (!table) return;
    var buttons = group.querySelectorAll("button");
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        var v = b.getAttribute("data-value");
        buttons.forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        table.querySelectorAll("tbody tr").forEach(function (tr) {
          tr.hidden = v !== "todos" && tr.getAttribute("data-group") !== v;
        });
      });
    });
  });

  /* ---- Hoja de ruta: perfil, marcas y avance (se guarda solo en este navegador) ---- */
  var roadmap = document.querySelector(".roadmap");
  if (roadmap) {
    var KEY_DONE = "pc-ruta-hechos", KEY_PROFILE = "pc-ruta-perfil";
    var load = function (k, def) { try { var v = JSON.parse(localStorage.getItem(k)); return v || def; } catch (e) { return def; } };
    var save = function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
    var profile = load(KEY_PROFILE, { prevision: "ambas", trabajo: "si", maneja: "si" });
    var done = load(KEY_DONE, []);
    var boxes = Array.prototype.slice.call(document.querySelectorAll("[data-step]"));

    var applies = function (tags) {
      if (!tags) return true;
      return tags.split(" ").every(function (t) {
        if (t === "fonasa") return profile.prevision !== "isapre";
        if (t === "isapre") return profile.prevision !== "fonasa";
        if (t === "trabajo") return profile.trabajo !== "no";
        if (t === "maneja") return profile.maneja !== "no";
        return true;
      });
    };

    var render = function () {
      document.querySelectorAll("[data-profile]").forEach(function (b) {
        b.setAttribute("aria-pressed", String(profile[b.getAttribute("data-profile")] === b.getAttribute("data-value")));
      });
      document.querySelectorAll("[data-tags]").forEach(function (el) { el.hidden = !applies(el.getAttribute("data-tags")); });
      var total = 0, checked = 0;
      document.querySelectorAll("[data-stage]").forEach(function (stage) {
        var t = 0, c = 0;
        stage.querySelectorAll("[data-step]").forEach(function (cb) {
          var li = cb.closest("li");
          cb.checked = done.indexOf(cb.getAttribute("data-step")) > -1;
          li.classList.toggle("is-checked", cb.checked);
          if (li.hidden) return;
          t++; if (cb.checked) c++;
        });
        total += t; checked += c;
        stage.querySelector("[data-stage-count]").textContent = c + " de " + t + " pasos";
        stage.classList.toggle("is-done", t > 0 && c === t);
      });
      var pct = total ? Math.round((checked / total) * 100) : 0;
      document.querySelectorAll("[data-progress-bar]").forEach(function (b) { b.style.width = pct + "%"; });
      document.querySelectorAll("[data-progress-text]").forEach(function (p) { p.textContent = checked + " de " + total + " pasos"; });
    };

    boxes.forEach(function (cb) {
      cb.addEventListener("change", function () {
        var id = cb.getAttribute("data-step");
        done = done.filter(function (x) { return x !== id; });
        if (cb.checked) done.push(id);
        save(KEY_DONE, done); render();
      });
    });
    document.querySelectorAll("[data-profile]").forEach(function (b) {
      b.addEventListener("click", function () {
        profile[b.getAttribute("data-profile")] = b.getAttribute("data-value");
        save(KEY_PROFILE, profile); render();
      });
    });
    document.querySelectorAll("[data-reset]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (!window.confirm("¿Quieres borrar todas tus marcas? Esta acción no se puede deshacer.")) return;
        done = []; save(KEY_DONE, done); render();
      });
    });
    render();
  }

  /* ---- Volver arriba ---- */
  var top = document.querySelector(".back-top");
  if (top) {
    window.addEventListener("scroll", function () {
      top.classList.toggle("is-visible", window.scrollY > 400);
    }, { passive: true });
  }
})();
