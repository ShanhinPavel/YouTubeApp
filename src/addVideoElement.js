/* eslint-disable no-undef */
import createDomElement from './createDomElement';

// Take <div class=page> and find out last of them. Add video information to Dom
export default function (elementComponent) {
  const pageElements = document.getElementsByClassName('page');
  const amountOfelements = pageElements.length;
  const lastPage = pageElements[amountOfelements - 1];
  // Examine if are pages yet? If no, create a new page
  // add video element to DOM
  if (lastPage && lastPage.children.length < 4) {
    lastPage.appendChild(elementComponent);
  } else if (!lastPage || lastPage.children.length === 4) {
    const pageElement = createDomElement('div', { class: `page page-${amountOfelements + 1}` });
    pageElement.appendChild(elementComponent);
    const main = document.getElementsByClassName('main')[0];
    main.appendChild(pageElement);
  }
}
