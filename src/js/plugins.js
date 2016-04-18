(function($) {

  // onepage scroll plugin
  $(".main").onepage_scroll({
    // sectionContainer accepts any kind of selector in case you don't want to use section
    sectionContainer: "section",

    // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    easing: "ease",

    // AnimationTime let you define how long each section takes to animate
    animationTime: 1000,

    // You can either show or hide the pagination. Toggle true for show, false for hide.
    pagination: true,

    // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    updateURL: false,

    // This option accepts a callback function. The function will be called before the page moves.
    beforeMove: function(index) {}, 

    // This option accepts a callback function. The function will be called after the page moves.
    afterMove: function(index) {}, 

    // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    loop: false, 

    // You can activate the keyboard controls
    keyboard: true, 

    // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    responsiveFallback: false, 

    // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    direction: "vertical" 
  });
}(jQuery));
