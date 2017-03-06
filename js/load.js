  'use strict';

  window.load = (function () {

    return function (url, onLoad, callbackName) {
      if (!callbackName) {
        callbackName = 'cb' + Date.now();
      }

      window[callbackName] = function (data) {
        onLoad(data);
      };

      var script = document.createElement('script');
      script.src = url + '?callback=' + callbackName;
      document.body.appendChild(script);
    };
  }());
