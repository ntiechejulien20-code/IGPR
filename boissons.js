const dishGrid = document.getElementById('dishGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('menuSearch');
const catTabs = document.querySelectorAll('.cat-tab');

let activeCat = 'all';
let query = '';

function renderDishes(){
  dishGrid.innerHTML = '';
  DRINKS_DATA.forEach(item => {
    const card = document.createElement('article');
    card.className = 'dish-card';
    card.dataset.cat = item.cat;
    card.dataset.name = item.name.toLowerCase();

    card.innerHTML = `
      <div class="dish-media">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <span class="dish-cat-tag">${item.catLabel}</span>
      </div>
      <div class="dish-info">
        <h3 class="dish-name">${item.name}</h3>
        <div class="dish-price-row">
          <button class="dish-price" data-id="${item.id}">${item.price}</button>
          <span class="dish-hint">Voir les caractéristiques</span>
        </div>
        <button class="dish-add" data-id="${item.id}">Ajouter au panier</button>
      </div>
    `;

    card.addEventListener('click', () => openModal(item));
    card.querySelector('.dish-add').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(item);
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
let currentItem = null;

function openModal(item){
  currentItem = item;
  modalImg.src = item.img;
  modalImg.alt = item.name;
  modalPrice.textContent = item.price;
  modalCat.textContent = item.catLabel;
  modalName.textContent = item.name;
  modalDesc.textContent = item.desc || "";
  modalDesc.style.display = item.desc ? "" : "none";

  const hasDetails = item.details && item.details.length > 0;
  modalIngredients.previousElementSibling.style.display = hasDetails ? "" : "none";
  modalIngredients.style.display = hasDetails ? "" : "none";
  modalIngredients.innerHTML = hasDetails ? item.details.map(d => `<li>${d}</li>`).join('') : "";

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

modalAddBtn.addEventListener('click', () => {
  if(!currentItem) return;
  addToCart(currentItem);
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
