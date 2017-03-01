  'use strict';

  window.utils = {
    getRandomElement: function (collection) {
      return Math.floor(Math.random() * (collection.length - 1)) + 1;
    },
    getRandomElementExcept: function (collection, arrayItemValue) {
      var newColor = collection[this.getRandomElement(collection)];
      var currentColor = arrayItemValue;

      while (!newColor || newColor === currentColor) {
        newColor = collection[this.getRandomElement(collection)];
      }

      return newColor;

    }
  };
