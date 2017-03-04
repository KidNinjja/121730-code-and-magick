  'use strict';

  window.utils = (function () {

    /* Коды символов */
    var ENTER_KEY_CODE = 13;
    var ESCAPE_KEY_CODE = 27;

    var isActivateEvent = function (event) {
      return event.keyCode && event.keyCode === ENTER_KEY_CODE;
    };

    var isDeactivationEvent = function (event) {
      return event.keyCode && event.keyCode === ESCAPE_KEY_CODE;
    };

    var getRandomElement = function (collection) {
      return Math.floor(Math.random() * (collection.length - 1)) + 1;
    };

    var getRandomElementExcept = function (collection, arrayItemValue) {
      var newColor = collection[getRandomElement(collection)];
      var currentColor = arrayItemValue;

      while (!newColor || newColor === currentColor) {
        newColor = collection[getRandomElement(collection)];
      }

      return newColor;

    };

    return {
      isActivateEvent: isActivateEvent,
      isDeactivationEvent: isDeactivationEvent,
      getRandomElement: getRandomElement,
      getRandomElementExcept: getRandomElementExcept
    };

  }());
