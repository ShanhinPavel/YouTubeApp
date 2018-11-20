/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import createSearchField from './create_search_field';
import createComponents from './createComponents';
import createMainField from './createMainField';
import getDomElement from './getDomElement';
import clickSubmit from './clickButton';
import slider from './slider';

window.onload = () => {
  // Create search field
  document.body.appendChild(createSearchField());
  document.querySelector('#button')
    .addEventListener('click', clickSubmit);
    slider();
};
