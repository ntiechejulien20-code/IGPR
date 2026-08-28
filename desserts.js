const dishGrid = document.getElementById('dishGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('menuSearch');
const catTabs = document.querySelectorAll('.cat-tab');

let activeCat = 'all';
let query = '';

function renderDishes(){
  dishGrid.innerHTML = '';
  DESSERTS_DATA.forEach(dish => {
    const card = document.createElement('article');
    card.className = 'dish-card';
    card.dataset.cat = dish.cat;
    card.dataset.name = dish.name.toLowerCase();

    card.innerHTML = `
      <div class="dish-media">
        <img src="${dish.img}" alt="${dish.name}" loading="lazy">
        <span class="dish-cat-tag">${dish.catLabel}</span>
      </div>
      <div class="dish-info">
        <h3 class="dish-name">${dish.name}</h3>
        <div class="dish-price-row">
          <button class="dish-price" data-id="${dish.id}">${dish.price}</button>
          <span class="dish-hint">Voir les ingrédients</span>
        </div>
        <button class="dish-add" data-id="${dish.id}">Ajouter au panier</button>
      </div>
    `;

    card.addEventListener('click', () => openModal(dish));
    card.querySelector('.dish-add').addEventListener('click', (e) => {
      e.stopPropagation();
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

const modal = document.getElementById('dishModal');
const modalImg = document.getElementById('modalImg');
const modalPrice = document.getElementById('modalPrice');
const modalCat = document.getElementById('modalCat');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalIngredients = document.getElementById('modalIngredients');
const modalClose = document.getElementById('modalClose');
const modalAddBtn = document.getElementById('modalAddBtn');
let currentDish = null;

function openModal(dish){
  currentDish = dish;
  modalImg.src = dish.img;
  modalImg.alt = dish.name;
  modalPrice.textContent = dish.price;
  modalCat.textContent = dish.catLabel;
  modalName.textContent = dish.name;
  modalDesc.textContent = dish.desc || "";
  modalDesc.style.display = dish.desc ? "" : "none";

  const hasIngredients = dish.ingredients && dish.ingredients.length > 0;
  modalIngredients.previousElementSibling.style.display = hasIngredients ? "" : "none";
  modalIngredients.style.display = hasIngredients ? "" : "none";
  modalIngredients.innerHTML = hasIngredients ? dish.ingredients.map(ing => `<li>${ing}</li>`).join('') : "";

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
