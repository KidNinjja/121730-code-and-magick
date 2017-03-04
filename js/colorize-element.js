  'use strict';

  window.setColor = (function () {

    var colorizeElement = function (element, colors, property) {
      var elementBaseColor = null;

      element.addEventListener('click', function () {
        element.setAttribute('style', property + ':' + ' ' + window.utils.getRandomElementExcept(colors, elementBaseColor));
        elementBaseColor = element.style.fill || element.getAttribute('style').split(': ')[1];
      }, false);

      element.addEventListener('keydown', function (event) {
        if (window.utils.isActivateEvent(event)) {
          element.setAttribute('style', property + ':' + ' ' + window.utils.getRandomElementExcept(colors, elementBaseColor));
          elementBaseColor = element.style.fill || element.getAttribute('style').split(': ')[1];
        }
      }, false);
    };

    return colorizeElement;

  }());
