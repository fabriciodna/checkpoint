'use strict';
document.documentElement.classList.add('js-ready');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('is-open', !expanded);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    menuButton.focus();
  }
});
const form = document.querySelector('#contact-form');
if (form) {
  const fields = ['nome', 'email', 'mensagem'];
  const status = document.querySelector('#form-status');
  const validate = id => {
    const field = form.elements[id];
    const value = field.value.trim();
    let error = '';
    if (!value) error = 'Preencha este campo.';
    else if (id === 'nome' && value.length < 2) error = 'Informe um nome com pelo menos 2 caracteres.';
    else if (id === 'email' && !field.validity.valid) error = 'Informe um e-mail válido, como voce@exemplo.com.';
    else if (id === 'mensagem' && value.length < 10) error = 'Escreva uma mensagem com pelo menos 10 caracteres.';
    if (value.length > field.maxLength) error = 'O texto ultrapassa o limite deste campo.';
    field.setAttribute('aria-invalid', String(Boolean(error)));
    document.getElementById(id + '-error').textContent = error;
    return !error;
  };
  form.addEventListener('submit', event => {
    event.preventDefault();
    const invalid = fields.filter(id => !validate(id));
    if (invalid.length) {
      status.textContent = 'Revise os campos indicados. Nenhuma mensagem foi enviada.';
      form.elements[invalid[0]].focus();
      return;
    }
    status.textContent = 'Validação concluída. Esta é uma demonstração: sua mensagem não foi enviada nem armazenada.';
  });
  fields.forEach(id => form.elements[id].addEventListener('input', () => {
    status.textContent = '';
    if (form.elements[id].getAttribute('aria-invalid') === 'true') validate(id);
  }));
}
