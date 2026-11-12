const KEY = "fd-order";

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(KEY, JSON.stringify(items));
  updateCartCount();
}

function addItem(item) {
  const items = readCart();
  const found = items.find((row) => row.id === item.id);
  if (found) found.qty += item.qty || 1;
  else items.push({ ...item, qty: item.qty || 1 });
  saveCart(items);
}

function setQty(id, qty) {
  const items = readCart().map((row) => (row.id === id ? { ...row, qty } : row)).filter((row) => row.qty > 0);
  saveCart(items);
  renderCart();
}

function cartTotal(items = readCart()) {
  return items.reduce((sum, row) => sum + row.price * row.qty, 0);
}

function updateCartCount() {
  const n = readCart().reduce((sum, row) => sum + row.qty, 0);
  document.querySelectorAll("[data-count]").forEach((el) => {
    el.textContent = n;
  });
}

function orderMessage(name, note) {
  const items = readCart();
  const lines = items.map((row) => `- ${row.qty}x ${row.name} (${money(row.price)} c/u)`);
  return [
    `Hola ${STORE.business}! Quiero hacer el siguiente pedido:`,
    ...lines,
    `Total estimado: ${money(cartTotal(items))}`,
    `Nombre: ${name || "—"}`,
    `Comentarios: ${note || "—"}`,
  ].join("\n");
}

function sendOrder(name, note) {
  const text = orderMessage(name, note);
  window.open(`https://wa.me/${STORE.phone}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
}

function renderCart() {
  const box = document.querySelector("[data-cart]");
  if (!box) return;
  const items = readCart();
  if (!items.length) {
    box.innerHTML = "<p>El pedido está vacío.</p>";
    return;
  }
  box.innerHTML = items
    .map(
      (row) => `<div class="cart-row">
        <div><strong>${row.name}</strong><br><span>${money(row.price)}</span></div>
        <input type="number" min="1" value="${row.qty}" data-qty="${row.id}" aria-label="Cantidad de ${row.name}">
      </div>`
    )
    .join("") + `<p class="total">Total estimado: ${money(cartTotal(items))}</p>`;
  box.querySelectorAll("[data-qty]").forEach((input) => {
    input.addEventListener("change", () => setQty(input.dataset.qty, Number(input.value)));
  });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const pool = [...SERVICES, ...PRODUCTS];
  const item = pool.find((row) => row.id === button.dataset.add);
  if (!item) return;
  addItem(item);
  button.textContent = "Sumado";
  setTimeout(() => {
    button.textContent = "Agregar al pedido";
  }, 900);
});
