import {
  DOC, 
  BODY, 
  WINDOW_IS_LOADED,
  FALLBACK_AVATAR_URL
} from './constants';
import $ from 'jquery';

export default class FetchGitHubApi {

  addLoadedClass(className) {
    setTimeout(() => {
      BODY.classList.add(className);
    }, 1000);
  }

  setAvatarURL(URL = FALLBACK_AVATAR_URL) {
    DOC.querySelector('.avatar__img')
      .setAttribute('src', URL);
  }

  handleErrorMessage(errorObj) {
    let { responseText } = errorObj;
    responseText = JSON.parse(responseText)
    /* eslint-disable no-console */
    console.error(`ERROR MESSAGE: ${responseText.message}`);
    return false;
  }

  fetch(URL) {
    // eslint-disable-next-line
    $.get(URL)
      .done((result) => {
        this.setAvatarURL(result.avatar_url);
        this.addLoadedClass(WINDOW_IS_LOADED);
      })
      .fail((error) => {
        this.handleErrorMessage(error);
        this.setAvatarURL();
        this.addLoadedClass(WINDOW_IS_LOADED);
      });
  }
}

