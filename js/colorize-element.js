  'use strict';

  window.colorizeElement = (function () {

    var setEvent = function (element, colors, cb) {
      var elementBaseColor = null;

      element.addEventListener('click', function () {
        cb(elementBaseColor);
        elementBaseColor = element.style.fill || element.getAttribute('style').split(': ')[1];
      }, false);

      element.addEventListener('keydown', function (event) {
        if (window.utils.isActivateEvent(event)) {
          cb(elementBaseColor);
          elementBaseColor = element.style.fill || element.getAttribute('style').split(': ')[1];
        }
      }, false);
    };

    return setEvent;

  }());
