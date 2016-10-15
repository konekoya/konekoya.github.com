import { 
  DOC, 
  BODY, 
  WINDOW_IS_LOADED, 
  FALLBACK_AVATAR_URL 
} from './constants';

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
    console.error(`ERROR MESSAGE: ${responseText.message}`);
  }

  fetch() {
    $.get('https://api.github.com/users/konekoyaoo')
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

