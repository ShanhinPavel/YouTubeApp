/* eslint-disable no-undef */
import getData from './getComponentData';
import createCard from './templateOfComponent';
import addVideoElement from './addVideoElement';

// Get data from server and create elements of DOM
export default function createComponents() {
  const data = getData();
  Promise.resolve(data)
    .then((array) => {
      array.forEach((element) => {
        Promise.resolve(element)
          .then((objectOfVideo) => {
            const objectVideo = objectOfVideo.items[0];
            console.log(objectOfVideo.items[0]);
            const card = createCard(objectVideo);
            addVideoElement(card);
          });
      });
    });
}
