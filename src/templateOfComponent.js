import createDomElement from './createDomElement';

export default function (objectVideo) {
  const url = 'https://www.youtube.com/watch?';
  // Create containers for data
  const elContainer = createDomElement('div', { class: 'component' });
  const elDivScreenshotTitle = createDomElement('div', { class: 'screenshot-title' });
  const elDivInformation = createDomElement('div', { class: 'information' });
  // Image
  const elImg = createDomElement('img',
    {
      src: objectVideo.snippet.thumbnails.medium.url,
      height: objectVideo.snippet.thumbnails.medium.height,
      width: objectVideo.snippet.thumbnails.medium.width,
    });
  // Add img to <figure> and add all to container
  elDivScreenshotTitle.appendChild(elImg);
  // h1
  const elH1 = createDomElement('h1');
  // Create link
  const elA = createDomElement('a', { href: `${url}v=${objectVideo.id}`, target: '_blank' });
  // Add title to h1
  elH1.textContent = objectVideo.snippet.localized.title;
  // add h1 to link
  elA.appendChild(elH1);
  // Add link to container
  elDivScreenshotTitle.appendChild(elA);
  // Transform published date to string
  const publishedAt = new Date(objectVideo.snippet.publishedAt).toDateString();
  const videoDescription = objectVideo.snippet.description.split(' ');
  const shortDespription = `${videoDescription.slice(0, 10).join(' ')}...`;
  // Define obj
  const objP = {
    author: objectVideo.snippet.channelTitle,
    'publication-date': publishedAt,
    'view-count': objectVideo.statistics.viewCount,
    description: shortDespription,
  };
  // Create four tag <p> and push their into container
  const awesomeClassArray = ['fa fas fa-user', 'fa fas fa-calendar-alt', 'fa fas fa-eye'];
  const arrayKeys = Object.keys(objP);
  arrayKeys.forEach((elementArray, index) => {
    const domElDiv = createDomElement('div', { class: elementArray });
    const domElI = createDomElement('i', { class: awesomeClassArray[index] });
    const domElP = createDomElement('p');
    domElP.textContent = objP[elementArray];
    domElDiv.appendChild(domElI);
    domElDiv.appendChild(domElP);

    /* domEl.appendChild(awesomeElement);
    domEl.textContent = objP[elementArray]; */
    elDivInformation.appendChild(domElDiv);
  });
  elContainer.appendChild(elDivScreenshotTitle);
  elContainer.appendChild(elDivInformation);
  return elContainer;
}
