/* eslint-disable no-undef */
import createComponents from './createComponents';
import createMainField from './createMainField';
import getDomElement from './getDomElement';
import slider from './slider';

export default function clickSubmit(event) {
  const textField = getDomElement('#textField');
  if (!getDomElement('.main')) {
    createMainField();
    getDomElement('.main').setAttribute('data-request', textField.value);
  } else {
    getDomElement('.main').innerHTML = '';
  }
  event.preventDefault();
  createComponents();
  textField.value = '';
  // slider();
}
