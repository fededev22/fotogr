function nav() {
  return `<header class="bar">
    <a class="logo" href="index.html">Fotografía Digital</a>
    <button class="nav-toggle" aria-expanded="false">Menú</button>
    <nav>
      <a href="servicios.html">Servicios</a>
      <a href="tienda.html">Tienda</a>
      <a href="impresiones.html">Impresiones</a>
      <a href="galeria.html">Galería</a>
      <a href="reservas.html">Reservas</a>
      <a href="nosotros.html">Nosotros</a>
      <a href="contacto.html">Contacto</a>
      <a href="pedido.html">Pedido <span data-count>0</span></a>
    </nav>
  </header>
  <a class="float" href="https://wa.me/${STORE.phone}" target="_blank" rel="noopener">WhatsApp</a>`;
}

function footer() {
  return `<footer>
    <p>${STORE.business} · ${STORE.address}</p>
    <p>${STORE.hours}. Retiro en el local. Envíos a consultar.</p>
    <p>Los precios de esta demo se editan en js/data.js y pueden cambiar.</p>
  </footer>`;
}

function mount() {
  document.body.insertAdjacentHTML("afterbegin", nav());
  document.body.insertAdjacentHTML("beforeend", footer());
  const toggle = document.querySelector(".nav-toggle");
  toggle.addEventListener("click", () => {
    const navEl = document.querySelector("nav");
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    navEl.classList.toggle("open", !open);
  });
  updateCartCount();
  renderCart();
}

function card(item) {
  return `<article class="card">
    <img src="${item.image || "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=70"}" alt="${item.name}" loading="lazy">
    <h3>${item.name}</h3>
    <p>${item.blurb}</p>
    <strong>Desde ${money(item.price)}</strong>
    <button data-add="${item.id}">Agregar al pedido</button>
  </article>`;
}

document.addEventListener("DOMContentLoaded", mount);
