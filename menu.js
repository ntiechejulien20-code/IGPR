const dishGrid = document.getElementById('dishGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('menuSearch');
const catTabs = document.querySelectorAll('.cat-tab');

let activeCat = 'all';
let query = '';

// ============ RENDER DISHES ============
function renderDishes(){
  dishGrid.innerHTML = '';
  MENU_DATA.forEach(dish => {
    const card = document.createElement('article');
    card.className = 'dish-card';
    card.dataset.cat = dish.cat;
    card.dataset.name = dish.name.toLowerCase();

    const hasSizes = dish.sizes && dish.sizes.length > 0;

    const priceBlock = hasSizes
      ? `<div class="dish-price-row dish-price-row--sizes">
          ${dish.sizes.map((s, i) => `<button class="dish-price dish-price--size" data-id="${dish.id}" data-size="${i}">${s.label} · ${s.price}</button>`).join('')}
        </div>`
      : `<div class="dish-price-row">
          <button class="dish-price" data-id="${dish.id}">${dish.price}</button>
          <span class="dish-hint">Voir les ingrédients</span>
        </div>`;

    card.innerHTML = `
      <div class="dish-media">
        <img src="${dish.img}" alt="${dish.name}" loading="lazy">
        <span class="dish-cat-tag">${dish.catLabel}</span>
      </div>
      <div class="dish-info">
        <h3 class="dish-name">${dish.name}</h3>
        ${priceBlock}
        <button class="dish-add" data-id="${dish.id}">${hasSizes ? 'Choisir la taille' : 'Ajouter au panier'}</button>
      </div>
    `;

    card.addEventListener('click', () => openModal(dish));
    card.querySelector('.dish-add').addEventListener('click', (e) => {
      e.stopPropagation();
      if(hasSizes){
        openModal(dish);
        return;
      }
      addToCart(dish);
      const btn = e.currentTarget;
      btn.textContent = 'Ajouté ✓';
      btn.classList.add('is-added');
      setTimeout(() => { btn.textContent = 'Ajouter au panier'; btn.classList.remove('is-added'); }, 1200);
    });
    dishGrid.appendChild(card);
  });
  applyFilters();
}

// ============ FILTERS: CATEGORY + SEARCH ============
function applyFilters(){
  const cards = document.querySelectorAll('.dish-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const matchesCat = activeCat === 'all' || card.dataset.cat === activeCat;
    const matchesQuery = card.dataset.name.includes(query);
    const show = matchesCat && matchesQuery;
    card.classList.toggle('is-hidden', !show);
    if(show) visibleCount++;
  });

  noResults.classList.toggle('is-visible', visibleCount === 0);
}

catTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    catTabs.forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    activeCat = tab.dataset.cat;
    applyFilters();
  });
});

searchInput.addEventListener('input', (e) => {
  query = e.target.value.trim().toLowerCase();
  applyFilters();
});

// ============ DISH MODAL ============
const modal = document.getElementById('dishModal');
const modalImg = document.getElementById('modalImg');
const modalPrice = document.getElementById('modalPrice');
const modalCat = document.getElementById('modalCat');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalIngredients = document.getElementById('modalIngredients');
const modalClose = document.getElementById('modalClose');
const modalAddBtn = document.getElementById('modalAddBtn');
const modalSizeOptions = document.getElementById('modalSizeOptions');
let currentDish = null;

function openModal(dish){
  currentDish = dish;
  modalImg.src = dish.img;
  modalImg.alt = dish.name;
  modalCat.textContent = dish.catLabel;
  modalName.textContent = dish.name;
  modalDesc.textContent = dish.desc || "";
  modalDesc.style.display = dish.desc ? "" : "none";

  const hasIngredients = dish.ingredients && dish.ingredients.length > 0;
  modalIngredients.previousElementSibling.style.display = hasIngredients ? "" : "none";
  modalIngredients.style.display = hasIngredients ? "" : "none";
  modalIngredients.innerHTML = hasIngredients ? dish.ingredients.map(ing => `<li>${ing}</li>`).join('') : "";

  const hasSizes = dish.sizes && dish.sizes.length > 0;
  if(hasSizes){
    modalPrice.style.display = "none";
    modalAddBtn.style.display = "none";
    modalSizeOptions.style.display = "flex";
    modalSizeOptions.innerHTML = dish.sizes.map((s, i) => `
      <button class="modal-size-btn" data-size="${i}">
        <span>${s.label}</span>
        <strong>${s.price}</strong>
      </button>
    `).join('');
    modalSizeOptions.querySelectorAll('.modal-size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const size = dish.sizes[btn.dataset.size];
        addToCart({
          id: `${dish.id}-${size.label}`,
          name: `${dish.name} (${size.label})`,
          price: size.price,
          priceValue: size.priceValue,
          img: dish.img,
        });
        btn.querySelector('strong').textContent = 'Ajouté ✓';
        setTimeout(() => { btn.querySelector('strong').textContent = size.price; }, 1200);
      });
    });
  } else {
    modalPrice.style.display = "";
    modalPrice.textContent = dish.price;
    modalAddBtn.style.display = "";
    modalSizeOptions.style.display = "none";
    modalSizeOptions.innerHTML = "";
  }

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

modalAddBtn.addEventListener('click', () => {
  if(!currentDish) return;
  addToCart(currentDish);
  modalAddBtn.textContent = 'Ajouté au panier ✓';
  setTimeout(() => { modalAddBtn.textContent = 'Ajouter au panier'; }, 1200);
});

function closeModal(){
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

renderDishes();
