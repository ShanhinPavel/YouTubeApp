/* eslint-disable no-undef */
import createElement from './createDomElement';

export default function createMainField() {
  const main = createElement('div', { class: 'main' });
  document.body.appendChild(main);
}
