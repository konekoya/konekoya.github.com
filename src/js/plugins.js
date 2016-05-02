var HEYJOSHUA = (function($) {
  'use strict';

  function moveToIntro(el) {
    if (typeof el === 'string' && el.length > 0) {
      var $el = $(el);
      $el.on('click', function() {
        $.fn.fullpage.moveTo('intro');
      });
    }
  }

  function init() {
    // no need to include document.ready function here,
    // since we included the script before closing body tag
    $('#fullpage').fullpage({
      css3: true,

      // easing tool - https://matthewlein.com/ceaser/
      easingcss3: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)', 
      fitToSection: true
    });


    moveToIntro('.avatar__img');
  }

  // public APIs
  return {
    init: init
  };

}(jQuery));


$(document).ready(function() {
  HEYJOSHUA.init();
});
