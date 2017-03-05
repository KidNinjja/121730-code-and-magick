  'use strict';


  (function () {


    /* Элементы всплывающего окна настроек персонажа */
    var popupButtonOpen = document.querySelector('.setup-open');
    var popupButtonOpenImage = popupButtonOpen.querySelector('img');
    var wizardSettingsPopup = document.querySelector('.setup');
    var popupButtonClose = document.querySelector('.setup-close');
    var popupSubmitButton = document.querySelector('.setup-submit');

    /* Установка доболнительных атрибутов для диалогового окна и его элементов */
    window.addEventListener('load', function () {
      wizardSettingsPopup.setAttribute('role', 'dialog');
      wizardSettingsPopup.setAttribute('aria-hidden', 'true');
      popupButtonOpenImage.setAttribute('role', 'button');
      popupButtonOpenImage.setAttribute('aria-pressed', 'false');
      popupButtonClose.setAttribute('aria-pressed', 'false');
    });


    /* Мантия персонажа [Данные] */
    var wizardCoatData = {
      element: document.querySelector('#wizard-coat'),
      colors: [
        'rgb(101, 137, 164)',
        'rgb(241, 43, 107)',
        'rgb(146, 100, 161)',
        'rgb(56, 159, 117)',
        'rgb(215, 210, 55)',
        'rgb(0, 0, 0)'
      ],
      baseColor: 'rgb(101, 137, 164)'
    };


    /* Глаза персонажа [Данные] */
    var wizardEyesData = {
      element: document.querySelector('#wizard-eyes'),
      colors: [
        'black',
        'red',
        'blue',
        'yellow',
        'green'
      ]
    };


    /* Фаербол персонажа [Данные] */
    var wizardFireballData = {
      element: document.querySelector('.setup-fireball-wrap'),
      colors: [
        '#ee4830',
        '#30a8ee',
        '#5ce6c0',
        '#e848d5',
        '#e6e848'
      ]
    };


    var focusOpenButton = function () {
      popupButtonOpenImage.focus();
    };


    /* Регистрация события на элементе всплывающего окна [КНОПКА ОТКРЫТЬ] */
    popupButtonOpen.addEventListener('click', function (event) {
      event.preventDefault();

      window.enableSetup.showSetupElement(event);

    });


    popupButtonOpenImage.addEventListener('keydown', function (event) {
      event.preventDefault();

      popupButtonOpenImage.setAttribute('aria-pressed', 'true');

      if (window.utils.isActivateEvent(event)) {
        window.enableSetup.showSetupElement();
      }

    });


    /* Регистрация события на элементе всплывающего окна [КНОПКА ЗАКРЫТЬ] */
    popupButtonClose.addEventListener('click', function (event) {
      event.preventDefault();

      window.enableSetup.hideSetupElement();

    });


    popupButtonClose.addEventListener('keydown', function (event) {
      event.preventDefault();

      if (window.utils.isActivateEvent(event)) {
        window.enableSetup.hideSetupElement(focusOpenButton);
      }

    });


    popupSubmitButton.addEventListener('click', function (event) {
      event.preventDefault();

      window.enableSetup.hideSetupElement();

    });

    popupSubmitButton.addEventListener('keydown', function (event) {
      event.preventDefault();

      if (window.utils.isActivateEvent(event)) {
        window.enableSetup.hideSetupElement(focusOpenButton);
      }

    });

    window.setColor(wizardCoatData.element, wizardCoatData.colors, function (color) {
      wizardCoatData.element.setAttribute('style', 'fill' + ':' + ' ' + window.utils.getRandomElementExcept(wizardCoatData.colors, color));
    });

    window.setColor(wizardEyesData.element, wizardEyesData.colors, function (color) {
      wizardEyesData.element.setAttribute('style', 'fill' + ':' + ' ' + window.utils.getRandomElementExcept(wizardCoatData.colors, color));
    });

    window.setColor(wizardFireballData.element, wizardFireballData.colors, function (color) {
      wizardFireballData.element.setAttribute('style', 'background-color' + ':' + ' ' + window.utils.getRandomElementExcept(wizardCoatData.colors, color));
    });

  }());
