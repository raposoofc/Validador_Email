// emailValidator.js
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Disponibiliza a função para uso no Cypress
if (typeof module !== 'undefined') {
  module.exports = { isValidEmail };
}
