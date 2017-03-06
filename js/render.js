  'use strict';

  window.render = (function () {

    var wizardTemplate = document.querySelector('.setup-wizard-appearance');

    return function (wizard) {
      var wizardElement = wizardTemplate.cloneNode(true);
      var name = document.createElement('span');
      name.textContent = wizard.name;
      wizardElement.appendChild(name);

      var svgElement = wizardElement.children[0].children[0];
      svgElement.style.position = 'static';
      svgElement.style.width = 50;
      svgElement.style.height = 50;

      svgElement.querySelector('#wizard-coat').style.fill = wizard.colorCoat;
      svgElement.querySelector('#wizard-eyes').style.fill = wizard.colorEyes;

      return wizardElement;
    };

  }());
