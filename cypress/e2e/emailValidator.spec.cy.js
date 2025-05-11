// emailValidator.spec.cy.js
const { isValidEmail } = require('../../emailValidator.js');

describe('Validação de E-mail', () => {
  it('Deve aceitar e-mails válidos', () => {
    expect(isValidEmail('teste@exemplo.com')).to.be.true;
    expect(isValidEmail('usuario123@gmail.com')).to.be.true;
    expect(isValidEmail('nome.sobrenome@dominio.co')).to.be.true;
  });

  it('Deve rejeitar e-mails inválidos', () => {
    expect(isValidEmail('')).to.be.false;
    expect(isValidEmail('usuario.com')).to.be.false;
    expect(isValidEmail('usuario@.com')).to.be.false;
    expect(isValidEmail('usuario@com')).to.be.false;
    expect(isValidEmail('usuario@com.')).to.be.false;
    expect(isValidEmail('@dominio.com')).to.be.false;
  });
});