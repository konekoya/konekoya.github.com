import { GITHUB_API_URL } from './constants';
import FetchGitHubApi from './fetch-github-api';
import FullpageConfig from './fullpage-config';

const KONEKOYA = (function() {
  'use strict';

  function init() {
    const fullpage = new FullpageConfig();
    const fetchApi = new FetchGitHubApi();

    fullpage.Initialize();
    fetchApi.fetch(GITHUB_API_URL);
  }

  // public APIs
  return {
    init: init
  };
}());

document.addEventListener('DOMContentLoaded', () => {
  KONEKOYA.init();
});
