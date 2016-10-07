import { DOC, BODY, WINDOW_IS_LOADED } from './constants';

export default class FetchGitHubApi {

  addLoadedClass(className) {
    BODY.classList.add(className);
  }

  setAvatarURL(URL) {
    DOC.querySelector('.avatar__img')
      .setAttribute('src', URL);
  }

  fetch() {
    $.get('https://api.github.com/users/konekoya', (result) => {
      if (result) {
        this.setAvatarURL(result.avatar_url);
        this.addLoadedClass(WINDOW_IS_LOADED);
      }
    });
  }
}

