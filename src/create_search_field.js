/* eslint-disable no-undef */
import createDomElement from './createDomElement';

export default function createSearchElement() {
  const header = createDomElement('header');
  const container = createDomElement('div', { class: 'container' });
  const form = createDomElement('form', { action: '', method: 'get' });
  const inputText = createDomElement('input', {
    id: 'textField', name: 's', type: 'text', placeholder: 'Type your request',
  });
  const inputSubmit = createDomElement('button', { type: 'submit', id: 'button' });

  form.appendChild(inputText);
  form.appendChild(inputSubmit);
  container.appendChild(form);
  header.appendChild(container);
  return header;
}
