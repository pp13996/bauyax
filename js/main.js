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

document.addEventListener("DOMContentLoaded", () => {

  const isInPublic = window.location.pathname.includes("/public/");
  const basePath = isInPublic ? "../" : "";

  // NAVBAR
  fetch(`${basePath}partials/navbar.html`)
    .then(res => {
      if (!res.ok) throw new Error("Navbar no encontrado");
      return res.text();
    })
    .then(data => {
      const navContainer = document.getElementById("navbar");
      if (!navContainer) return;

      navContainer.innerHTML = data;

    // Ajustar links dinámicamente
    const links = navContainer.querySelectorAll('[data-link]');
    links.forEach(link => {
      link.href = `${basePath}${link.dataset.link}`;
    });


      // ANIMACION NAVBAR
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
    })
    .catch(err => console.error(err));

  // FOOTER
  fetch(`${basePath}partials/footer.html`)
    .then(res => {
      if (!res.ok) throw new Error("Footer no encontrado");
      return res.text();
    })
    .then(data => {
      const footer = document.getElementById("footer");
      if (footer) footer.innerHTML = data;
    })
    .catch(err => console.error(err));

});