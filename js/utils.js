  'use strict';

  var utils = {
    getRandomElement: function (collection) {
      return Math.floor(Math.random() * (collection.length - 1)) + 1;
    },
    getRandomElementExcept: function (collection, arrayItem) {
      var newColor = collection[this.getRandomElement(collection)];
      var currentColor = arrayItem;
      console.log(newColor);
      console.log(currentColor);
      while (currentColor === arrayItem) {
        currentColor = collection[this.getRandomElement(collection)];
      }


    }
  };
