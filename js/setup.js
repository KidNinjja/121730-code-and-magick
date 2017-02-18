  'use strict';

  /* Получение случайного числа */
  var getRandomInteger = function (min, max, flag) {
    if (flag) {

      var bondingColor = [];
      var currentBondingColor = '';

      bondingColor.push((Math.floor(Math.random() * (max - min)) + min).toString(16));
      bondingColor.push((Math.floor(Math.random() * (max - min)) + min).toString(16));
      bondingColor.push((Math.floor(Math.random() * (max - min)) + min).toString(16));

      for (var i = 0; i < bondingColor.length; i++) {
        currentBondingColor += bondingColor[i];
      }

      return currentBondingColor;

    } else {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  };

  /* Элементы всплывающего окна настроек персонажа */
  var popupButtonOpen = document.querySelector('.setup-open');
  var popupButtonClose = document.querySelector('.setup-close');
  var wizardSettingsPopup = document.querySelector('.setup');
  var wizardSettingsPopupFlag = 'invisible';

  /* Поле для ввода имени игрока */
  var userNameField = document.querySelector('.setup-user-name');
  var userNameFieldMaxLength = 50;


  /* Мантия персонажа [ЭЛЕМЕНТ] */
  var wizardCoatElement = document.querySelector('#wizard-coat');
  /* Глаза персонажа [ЭЛЕМЕНТЫ] */
  var wizardEyesElement = document.querySelector('#wizard-eyes');
  /* Фаербол персонажа [ЭЛЕМЕНТ] */
  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');


  /* Все поддерживаемые цвета [Текстовый формат] */
  var CSS_COLOR_NAMES = [
    'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine',
    'Azure', 'Beige', 'Bisque', 'Black',
    'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown',
    'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate',
    'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson',
    'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod',
    'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki',
    'DarkMagenta', 'DarkOliveGreen', 'Darkorange', 'DarkOrchid',
    'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue',
    'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet',
    'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey',
    'DodgerBlue', 'FireBrick', 'FloralWhite',
    'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite',
    'Gold', 'GoldenRod', 'Gray', 'Grey',
    'Green', 'GreenYellow', 'HoneyDew', 'HotPink',
    'IndianRed', 'Indigo', 'Ivory', 'Khaki',
    'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon',
    'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow',
    'LightGray', 'LightGrey', 'LightGreen', 'LightPink',
    'LightSalmon', 'LightSeaGreen', 'LightSkyBlue',
    'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue',
    'LightYellow', 'Lime', 'LimeGreen', 'Linen',
    'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue',
    'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue',
    'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue',
    'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite',
    'Navy', 'OldLace', 'Olive', 'OliveDrab',
    'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod',
    'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip',
    'PeachPuff', 'Peru', 'Pink', 'Plum',
    'PowderBlue', 'Purple', 'Red', 'RosyBrown',
    'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown',
    'SeaGreen', 'SeaShell', 'Sienna', 'Silver',
    'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey',
    'Snow', 'SpringGreen', 'SteelBlue', 'Tan',
    'Teal', 'Thistle', 'Tomato', 'Turquoise',
    'Violet', 'Wheat', 'White', 'WhiteSmoke',
    'Yellow', 'YellowGreen'
  ];


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
  wizardCoatElement.addEventListener('click', function (event) {
    event.preventDefault();

    wizardCoatElement.attributes.style.value = 'fill: rgb(' + getRandomInteger(1, 255) + ',' + getRandomInteger(1, 255) + ',' + getRandomInteger(1, 255) + ')';
  });


  /* Регистрация события на элементе [ГЛАЗА ПЕРСОНАЖА] */
  wizardEyesElement.addEventListener('click', function (event) {
    event.preventDefault();
    wizardEyesElement.setAttribute('fill', CSS_COLOR_NAMES[getRandomInteger(1, CSS_COLOR_NAMES.length)]);
  });


  /* Регистрация события на элементе [ОГНЕННЫЙ ШАР ПЕРСОНАЖА] */
  wizardFireballElement.addEventListener('click', function (event) {
    event.preventDefault();

    wizardFireballElement.setAttribute('style', 'background-color: #' + getRandomInteger(1, 255, true));
  });
