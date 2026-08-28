const form = document.getElementById('reservationForm');
const formWrapper = document.getElementById('formWrapper');
const confirmPanel = document.getElementById('confirmPanel');
const confirmName = document.getElementById('confirmName');
const confirmSummary = document.getElementById('confirmSummary');
const newReservationBtn = document.getElementById('newReservationBtn');

// set min date to today so users can't pick the past
const dateInput = document.getElementById('resDate');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

function clearError(fieldId){
  document.getElementById(fieldId).classList.remove('has-error');
}
function setError(fieldId){
  document.getElementById(fieldId).classList.add('has-error');
}

function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPhone(phone){
  return /^[\d\s()+.-]{8,}$/.test(phone);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById('resName').value.trim();
  const phone = document.getElementById('resPhone').value.trim();
  const email = document.getElementById('resEmail').value.trim();
  const date = document.getElementById('resDate').value;
  const time = document.getElementById('resTime').value;
  const guests = document.getElementById('resGuests').value;
  const space = form.querySelector('input[name="space"]:checked');

  [
    ['field-name', name.length > 1],
    ['field-phone', isValidPhone(phone)],
    ['field-email', isValidEmail(email)],
    ['field-date', !!date],
    ['field-time', !!time],
    ['field-guests', guests && Number(guests) > 0],
  ].forEach(([id, ok]) => {
    ok ? clearError(id) : setError(id);
    if(!ok) valid = false;
  });

  if(!valid) return;

  // format date nicely
  const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  confirmName.textContent = name;
  confirmSummary.innerHTML = `
    <div><span>Date</span><span>${formattedDate}</span></div>
    <div><span>Heure</span><span>${time}</span></div>
    <div><span>Personnes</span><span>${guests}</span></div>
    <div><span>Espace</span><span>${space.value}</span></div>
    <div><span>Contact</span><span>${phone}</span></div>
  `;

  formWrapper.style.display = 'none';
  confirmPanel.classList.add('is-visible');
});

newReservationBtn.addEventListener('click', () => {
  form.reset();
  dateInput.setAttribute('min', today);
  confirmPanel.classList.remove('is-visible');
  formWrapper.style.display = 'block';
});
