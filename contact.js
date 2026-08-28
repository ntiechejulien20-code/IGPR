const form = document.getElementById('contactForm');
const formWrapper = document.getElementById('formWrapper');
const confirmPanel = document.getElementById('confirmPanel');
const confirmName = document.getElementById('confirmName');
const newMessageBtn = document.getElementById('newMessageBtn');

function clearError(fieldId){
  document.getElementById(fieldId).classList.remove('has-error');
}
function setError(fieldId){
  document.getElementById(fieldId).classList.add('has-error');
}
function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const subject = document.getElementById('cSubject').value;
  const message = document.getElementById('cMessage').value.trim();

  [
    ['field-name', name.length > 1],
    ['field-email', isValidEmail(email)],
    ['field-subject', !!subject],
    ['field-message', message.length > 3],
  ].forEach(([id, ok]) => {
    ok ? clearError(id) : setError(id);
    if(!ok) valid = false;
  });

  if(!valid) return;

  confirmName.textContent = name;
  formWrapper.style.display = 'none';
  confirmPanel.classList.add('is-visible');
});

newMessageBtn.addEventListener('click', () => {
  form.reset();
  confirmPanel.classList.remove('is-visible');
  formWrapper.style.display = 'block';
});
