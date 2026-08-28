// ============ CART CORE (shared across menu / boissons / desserts) ============
const WHATSAPP_NUMBER = "237689786064"; // sans le "+", format international

const CART_KEY = "igp_cart";

function loadCart(){
  try{
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  }catch(e){
    return [];
  }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(item){
  const cart = loadCart();
  const existing = cart.find(c => c.id === item.id);
  if(existing){
    existing.qty += 1;
  }else{
    cart.push({ id: item.id, name: item.name, price: item.price, priceValue: item.priceValue, img: item.img, qty: 1 });
  }
  saveCart(cart);
  renderCart();
  openCart();
}

function changeQty(id, delta){
  const cart = loadCart();
  const item = cart.find(c => c.id === id);
  if(!item) return;
  item.qty += delta;
  const updated = item.qty <= 0 ? cart.filter(c => c.id !== id) : cart;
  saveCart(updated);
  renderCart();
}

function removeFromCart(id){
  const cart = loadCart().filter(c => c.id !== id);
  saveCart(cart);
  renderCart();
}

function cartTotal(cart){
  return cart.reduce((sum, item) => sum + (item.priceValue * item.qty), 0);
}
function cartCount(cart){
  return cart.reduce((sum, item) => sum + item.qty, 0);
}
function formatFCFA(value){
  return Math.round(value).toLocaleString('fr-FR').replace(/\u202f|\u00a0/g, ' ') + ' FCFA';
}

// ============ DOM REFS ============
const cartBtn = document.getElementById('cartBtn');
const cartBadge = document.getElementById('cartBadge');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartClose = document.getElementById('cartClose');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotalValue');
const cartWhatsappBtn = document.getElementById('cartWhatsapp');

function renderCart(){
  const cart = loadCart();
  const count = cartCount(cart);

  if(cartBadge){
    cartBadge.textContent = count;
    cartBadge.classList.toggle('is-visible', count > 0);
  }

  if(!cartItemsEl) return;

  if(cart.length === 0){
    cartItemsEl.innerHTML = '<p class="cart-empty">Votre panier est vide pour l\'instant.</p>';
    cartWhatsappBtn.disabled = true;
  }else{
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${item.price}</div>
          <div class="cart-item-actions">
            <div class="qty-control">
              <button data-action="dec" data-id="${item.id}">−</button>
              <span>${item.qty}</span>
              <button data-action="inc" data-id="${item.id}">+</button>
            </div>
            <button class="cart-item-remove" data-action="remove" data-id="${item.id}">Retirer</button>
          </div>
        </div>
      </div>
    `).join('');
    cartWhatsappBtn.disabled = false;
  }

  cartTotalEl.textContent = formatFCFA(cartTotal(cart));
}

function openCart(){
  cartOverlay.classList.add('is-open');
  cartDrawer.classList.add('is-open');
}
function closeCart(){
  cartOverlay.classList.remove('is-open');
  cartDrawer.classList.remove('is-open');
}

if(cartBtn){
  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeCart(); });

  cartItemsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if(!btn) return;
    const id = btn.dataset.id;
    if(btn.dataset.action === 'inc') changeQty(id, 1);
    if(btn.dataset.action === 'dec') changeQty(id, -1);
    if(btn.dataset.action === 'remove') removeFromCart(id);
  });

  cartWhatsappBtn.addEventListener('click', () => {
    const cart = loadCart();
    if(cart.length === 0) return;

    let message = "Bonjour Italian Green Place, je souhaite passer la commande suivante :%0A%0A";
    cart.forEach(item => {
      message += `• ${item.qty} x ${item.name} — ${item.price}%0A`;
    });
    message += `%0ATotal : ${formatFCFA(cartTotal(cart))}%0A%0AMerci de confirmer la disponibilité de la commande.`;

    const url = `https://wa.me/${+240222999090}?text=${message}`;
    window.open(url, '_blank');
  });

  renderCart();
}
