export default class FetchGitHubApi {


  setAvatarURL(url) {
    console.log('Fetching the data');
  }

  fetch() {
    $.get('https://api.github.com/users/konekoya', (result) => {
      document.querySelector('.avatar__img')
        .setAttribute('src', result.avatar_url);
    });
  }
}

