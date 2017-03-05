  'use strict';

  window.enableSetup = (function () {
    var wizardSettingsPopup = document.querySelector('.setup');

    /* Поле для ввода имени игрока */
    var userNameField = document.querySelector('.setup-user-name');
    var userNameFieldMaxLength = 50;

    var onSetupClose = null;

    var setupKeyDownHendler = function (event) {
      if (window.utils.isDeactivationEvent(event)) {
        wizardSettingsPopup.classList.add('invisible');
      }
    };

    var showSetupElement = function () {
      wizardSettingsPopup.classList.remove('invisible');
      document.addEventListener('keydown', setupKeyDownHendler);
      wizardSettingsPopup.setAttribute('aria-hidden', 'false');
      userNameField.required = true;
      userNameField.setAttribute('autofocus', 'autofocus');
      userNameField.setAttribute('maxlength', userNameFieldMaxLength);
    };

    var hideSetupElement = function (cb) {
      wizardSettingsPopup.classList.add('invisible');
      wizardSettingsPopup.setAttribute('aria-hidden', 'true');
      document.removeEventListener('keydown', setupKeyDownHendler);

      onSetupClose = cb;

      if (typeof onSetupClose === 'function') {
        onSetupClose();
      }

    };


    return {
      showSetupElement: showSetupElement,
      hideSetupElement: hideSetupElement
    };

  }());
