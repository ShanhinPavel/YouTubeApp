/* eslint-disable no-undef */
/* eslint-disable no-console */
import getInputText from './getInputText';
import getRequestString from './getRequestString';

// Searching inforamtion by entering word.
export default function getData() {
  let url = 'https://www.googleapis.com/youtube/v3/search?';
  const apiKey = 'key=AIzaSyBKaGt0vZHe5jkw40gPagqqzsdiQWtQ7W4';
  const textInput = getInputText();
  const objParamSearching = {
    maxResults: 30,
    part: 'snippet',
    q: textInput,
    fields: 'items(id)',
  };
  let wordQuery = getRequestString(objParamSearching);
  let endpoint = `${url}${wordQuery}&${apiKey}`;
  console.log(`request ${endpoint}`);

  // Get json file with list of videos
  const resultOfRequest = fetch(endpoint)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Invalid response!');
    })
  // Take information about video by id
    .then((jsonResponse) => {
      console.log(`response json ${jsonResponse}`);
      url = 'https://www.googleapis.com/youtube/v3/videos?';
      const objParamVideo = {
        part: 'snippet,statistics',
        fields: 'items(id,snippet,statistics)',
      };
      // Get array of url
      const arrayOfRequests = jsonResponse.items.map((value) => {
        objParamVideo.id = value.id.videoId;
        wordQuery = getRequestString(objParamVideo);
        endpoint = `${url}${wordQuery}&${apiKey}`;
        return endpoint;
      });
      console.log(arrayOfRequests);
      return arrayOfRequests;
    })
    // Make requests and return data about every video from list
    .then((arrayOfRequests) => {
      const totalDateOfVideo = arrayOfRequests.map((value) => {
        return fetch(value)
          .then((response) => {
            if (response.ok) {
              const jsonResponse = response.json();
              return jsonResponse;
            }
            throw new Error('Request failed!');
          })
          .catch(error => console.log(error));
      });
      return totalDateOfVideo;
    })
    .catch(error => console.log(error));
  return resultOfRequest;
}
