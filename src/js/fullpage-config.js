import $ from 'jquery';
import 'fullpage.js';

import { INTRO_IS_ACTIVE } from './constants';

export default class FullpageConfig {
  moveToIntro(el) {
    if (typeof el === 'string' && el.length > 0) {
      const trigger = document.querySelector(el);

      if (trigger) {
        trigger.addEventListener('click', () => {
          $.fn.fullpage.moveTo('intro');
        });
      }
    }
  }

  Initialize() {
    $('#fullpage').fullpage({
      menu: '#navigation',
      navigation: true,
      navigationTooltips: ['Home sweet home', 'Yep, A lllllittle About Me'],
      css3: true,

      // easing tool - https://matthewlein.com/ceaser/
      easingcss3: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',

      // Add transition for the second page
      // https://github.com/alvarotrigo/fullPage.js
      afterLoad: (anchorLink) => {
        const intro = document.querySelector('.intro');
        if (anchorLink === 'intro') {
          intro.classList.add(INTRO_IS_ACTIVE);
        }
      }
    });

    this.moveToIntro('.avatar__mouse');
  }
}
