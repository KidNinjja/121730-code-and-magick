  'use strict';

  var colorizeElement = function (element, colors, property) {
    element.addEventListener('click', function(event) {
      console.dir();
      element.setAttribute('style', 'fill: ' + colors[utils.getRandomElementExcept(colors, element.style.fill)]);
    }, false);
  };
