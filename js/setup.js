  'use strict';


  /* Коды символов */
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  /* Элементы всплывающего окна настроек персонажа */
  var popupButtonOpen = document.querySelector('.setup-open');
  var popupButtonOpenImage = popupButtonOpen.querySelector('img');
  var wizardSettingsPopup = document.querySelector('.setup');
  var popupButtonClose = document.querySelector('.setup-close');
  var popupSubmitButton = document.querySelector('.setup-submit');
  var wizardSettingsPopupFlag = 'invisible';

  /* Установка доболнительных атрибутов для диалогового окна и его элементов */
  window.addEventListener('load', function () {
    wizardSettingsPopup.setAttribute('role', 'dialog');
    wizardSettingsPopup.setAttribute('aria-hidden', 'true');
    popupButtonOpenImage.setAttribute('role', 'button');
    popupButtonOpenImage.setAttribute('aria-pressed', 'false');
    popupButtonClose.setAttribute('aria-pressed', 'false');
  });

  /* Поле для ввода имени игрока */
  var userNameField = document.querySelector('.setup-user-name');
  var userNameFieldMaxLength = 50;


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

  window.isActivateEvent = function (event) {
    return event.keyCode && event.keyCode === ENTER_KEY_CODE;
  };

  var setupKeyDownHendler = function (event) {
    if (event.keyCode === ESCAPE_KEY_CODE) {
      wizardSettingsPopup.classList.add(wizardSettingsPopupFlag);
    }
  };

  var showSetupElement = function () {
    wizardSettingsPopup.classList.remove(wizardSettingsPopupFlag);
    document.addEventListener('keydown', setupKeyDownHendler);
    wizardSettingsPopup.setAttribute('aria-hidden', 'false');
    userNameField.required = true;
    userNameField.setAttribute('autofocus', 'autofocus');
    userNameField.setAttribute('maxlength', userNameFieldMaxLength);
  };

  var hideSetupElement = function () {
    wizardSettingsPopup.classList.add(wizardSettingsPopupFlag);
    wizardSettingsPopup.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', setupKeyDownHendler);
  };

  /* Регистрация события на элементе всплывающего окна [КНОПКА ОТКРЫТЬ] */
  popupButtonOpen.addEventListener('click', function (event) {
    event.preventDefault();

    showSetupElement();

  });

  popupButtonOpenImage.addEventListener('keydown', function (event) {
    event.preventDefault();
    popupButtonOpenImage.setAttribute('aria-pressed', 'true');
    if (window.isActivateEvent(event)) {
      showSetupElement();
    }

  });

  /* Регистрация события на элементе всплывающего окна [КНОПКА ЗАКРЫТЬ] */
  popupButtonClose.addEventListener('click', function (event) {
    event.preventDefault();

    hideSetupElement();

  });

  popupButtonClose.addEventListener('keydown', function (event) {
    event.preventDefault();

    if (window.isActivateEvent(event)) {
      hideSetupElement();
    }

  });

  popupSubmitButton.addEventListener('click', function (event) {
    event.preventDefault();

    hideSetupElement();

  });

  popupSubmitButton.addEventListener('keydown', function (event) {
    if (window.isActivateEvent(event)) {
      hideSetupElement();
    }
  });

  window.colorizeElement(wizardCoatData.element, wizardCoatData.colors, 'fill');

  window.colorizeElement(wizardEyesData.element, wizardEyesData.colors, 'fill');

  window.colorizeElement(wizardFireballData.element, wizardFireballData.colors, 'background-color');
