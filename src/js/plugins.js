const JOSHUA = (function($) {
  'use strict';

  const doc = document;

  function moveToIntro(el) {
    if (typeof el === 'string' && el.length > 0) {
      const trigger = doc.querySelector(el);
      
      if (trigger) {
        trigger.addEventListener('click', () => {
          $.fn.fullpage.moveTo('intro');
        }, false);
      }
    }
  }

  function init() {
    // no need to include document.ready function here,
    // since we included the script before closing body tag
    $('#fullpage').fullpage({
      menu: '#navigation',
      navigation: true,
      navigationTooltips: ['Home sweet home', 'Yep, A lllllittle About Me'],
      css3: true,

      // easing tool - https://matthewlein.com/ceaser/
      easingcss3: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)', 
      fitToSection: true
    });

    moveToIntro('.avatar__mouse');
  }

  // public APIs
  return {
    init: init
  };

}(jQuery));


$(document).ready(function() {
  JOSHUA.init();
});
