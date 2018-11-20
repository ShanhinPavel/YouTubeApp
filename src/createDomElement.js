/* eslint-disable no-undef */
export default function createElement(tagName, params) {
  const element = document.createElement(tagName);
  if (params !== undefined) {
    const array = Object.keys(params, []);
    array.forEach((currentValue) => {
      element.setAttribute(currentValue, params[currentValue]);
    });
  }
  return element;
}
