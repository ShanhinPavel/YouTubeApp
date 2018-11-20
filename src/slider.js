/* // Slide tips
let slideIndex = 1;
function addCounterCurrentTips(arg) {
  const innerArray = arg;
  // document.querySelector('.totalAmount').textContent = `${slideIndex} / ${innerArray.length}`;
}
function showDivs(n) {
  const tips = document.querySelectorAll('.tip-slide');
  if (n > tips.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = tips.length; }
  tips.forEach((tip) => { tip.style.display = 'none'; });
  tips[slideIndex - 1].style.display = 'block';
  addCounterCurrentTips(tips);
}
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
} */

// Slide pages

export default function () {
  let pageIndex = 1;

  function addCounterCurrentTips(arg) {
    const innerArray = arg;
    // document.querySelector('.totalAmount').textContent = `${slideIndex} / ${innerArray.length}`;
  }
  function showDivs(n) {
    const pages = document.querySelectorAll('.page');
    console.log(`object Pages ${pages}`);
    console.log(`first ${pages.length}`);
    const amoutnOfPages = pages.length;
    if (n > amoutnOfPages) { pageIndex = 1; }
    if (n < 1) { pageIndex = amoutnOfPages; }
    pages.forEach((page) => { page.style.display = 'none'; });
    pages[pageIndex - 1].style.display = 'flex';
    addCounterCurrentTips(pages);
  }
  showDivs(pageIndex);

  function plusDivs(n) {
    showDivs(pageIndex += n);
  }
}
