  'use strict';

  /* Получение случайного числа */
  var getRandomInteger = function (min, max, flag) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  /* Элементы всплывающего окна настроек персонажа */
  var popupButtonOpen = document.querySelector('.setup-open');
  var popupButtonClose = document.querySelector('.setup-close');
  var wizardSettingsPopup = document.querySelector('.setup');
  var wizardSettingsPopupFlag = 'invisible';

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
    ]
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


  /* Регистрация события на элементе всплывающего окна [КНОПКА ОТКРЫТЬ] */
  popupButtonOpen.addEventListener('click', function (event) {
    event.preventDefault();

    wizardSettingsPopup.classList.remove(wizardSettingsPopupFlag);
    userNameField.required = true;
    userNameField.setAttribute('autofocus', 'autofocus');
    userNameField.setAttribute('maxlength', userNameFieldMaxLength);
  });


  /* Регистрация события на элементе всплывающего окна [КНОПКА ЗАКРЫТЬ] */
  popupButtonClose.addEventListener('click', function (event) {
    event.preventDefault();

    wizardSettingsPopup.classList.add(wizardSettingsPopupFlag);
  });


  /* Регистрация события на элементе всплывающего окна [КНОПКА ЗАКРЫТЬ] */
  popupButtonClose.addEventListener('click', function (event) {
    event.preventDefault();

    wizardSettingsPopup.classList.add(wizardSettingsPopupFlag);
  });


  /* Регистрация события на элементе [МАНТИЯ ПЕРСОНАЖА] */
  wizardCoatData.element.addEventListener('click', function (event) {
    event.preventDefault();

    wizardCoatData.element.attributes.style.value = 'fill: ' + wizardCoatData.colors[getRandomInteger(1, wizardCoatData.colors.length)];
  });


  /* Регистрация события на элементе [ГЛАЗА ПЕРСОНАЖА] */
  wizardEyesData.element.addEventListener('click', function (event) {
    event.preventDefault();

    wizardEyesData.element.setAttribute('fill', wizardEyesData.colors[getRandomInteger(1, wizardEyesData.colors.length)]);
  });


  /* Регистрация события на элементе [ОГНЕННЫЙ ШАР ПЕРСОНАЖА] */
  wizardFireballData.element.addEventListener('click', function (event) {
    event.preventDefault();

    wizardFireballData.element.setAttribute('style', 'background-color:' + wizardFireballData.colors[getRandomInteger(1, wizardFireballData.colors.length)]);
  });
