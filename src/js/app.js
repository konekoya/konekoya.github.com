import { DOC, INTRO_IS_ACTIVE } from './constants';
import FetchGitHubApi from './fetch-github-api';

const JOSHUA = (function($) {
  'use strict';

  function moveToIntro(el) {
    if (typeof el === 'string' && el.length > 0) {
      const trigger = DOC.querySelector(el);
      
      if (trigger) {
        trigger.addEventListener('click', () => {
          $.fn.fullpage.moveTo('intro');
        }, false);
      }
    }
  }

  function init() {
    $('#fullpage').fullpage({
      menu: '#navigation',
      navigation: true,
      navigationTooltips: ['Home sweet home', 'Yep, A lllllittle About Me'],
      css3: true,

      // easing tool - https://matthewlein.com/ceaser/
      easingcss3: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)', 
      fitToSection: true,

      // Temp, WIP: Add transition for the second page
      // https://github.com/alvarotrigo/fullPage.js 
      afterLoad: (anchorLink, index) => {
        const intro = DOC.querySelector('.intro');
        if (anchorLink === 'intro') {
          intro.classList.add(INTRO_IS_ACTIVE);
        }
      }
    });

    moveToIntro('.avatar__mouse');

    const fetchApi = new FetchGitHubApi();
    fetchApi.fetch();
  }

  // public APIs
  return {
    init: init
  };

}(jQuery));


$(DOC).ready(() => {
  JOSHUA.init();
});
