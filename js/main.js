    // === INTROANIMATION ===
const startTime = Date.now();
const MIN_TIME = 1500; // milisegundos (1.2s)

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(MIN_TIME - elapsed, 0);

    setTimeout(() => {
        loader.classList.add("hide");
        setTimeout(() => loader.remove(), 500);
    }, remaining);
});

// Lee el basePath desde el HTML
const basePath = document.body.dataset.basepath;

// NAVBAR
fetch(`${basePath}partials/navbar.html`)
  .then(res => res.text())
  .then(html => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    navbar.innerHTML = html;

    const nav = document.getElementById("Nav");
    const abrir = document.getElementById("abrir");
    const cerrar = document.getElementById("cerrar");

    if (abrir && cerrar && nav) {
      abrir.addEventListener("click", () => {
        nav.classList.add("visible");
      });

      cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
      });
    }
  });

// FOOTER
fetch(`${basePath}partials/footer.html`)
  .then(res => res.text())
  .then(html => {
    const footer = document.getElementById("footer");
    if (footer) footer.innerHTML = html;
  });
  