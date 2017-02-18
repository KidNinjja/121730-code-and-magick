  'use strict';

  /**
  * WIDTH_ - Ширина облака
  * HEIGHT_ - Высота облака
  */
  var WIDTH_HISTOGRAM_CLOUD = 420;
  var HEIGHT_HISTOGRAM_CLOUD = 270;

  /* Функция отрисовки облака */
  var drawHistogramCloud = function (ctx, width, height, backgroundColor, offset) {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(100 + offset, 10 + offset, width, height);
  };

  /* Получение случайного числа */
  var getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  window.renderStatistics = function (ctx, names, times) {

    /* Тень белого прямоугольного облака */
    drawHistogramCloud(ctx, WIDTH_HISTOGRAM_CLOUD, HEIGHT_HISTOGRAM_CLOUD, 'rgba(0, 0, 0, 0.7)', 10);

    /* Белое прямоугольное облако */
    drawHistogramCloud(ctx, WIDTH_HISTOGRAM_CLOUD, HEIGHT_HISTOGRAM_CLOUD, '#ffffff', 0);

    /* Отрисовка заголовка */
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 56);

    /* Отрисовка гистораммы */
    var maxTimePlayerCount = -1;

    /* Поиск максимального числа (худшего варианта)*/
    for (var i = 0; i < times.length; i++) {
      var timePlayerCount = times[i];
      if (timePlayerCount > maxTimePlayerCount) {
        maxTimePlayerCount = timePlayerCount;
      }
    }

    /* Базовые данные для колонок гистограммы */
    var histogramColumnWidth = 40;
    var histogramColumnHeight = 150;
    var histogramStepHeight = histogramColumnHeight / maxTimePlayerCount;
    var histogramColumnOffset = 50;
    var histogramColumnMarkColor = 'rgba(255, 0, 0, 1)';
    var histogramColumnStartPositionX = 120;

    for (var c = 0; c < times.length; c++) {

      var currentName = names[c];
      var currentTime = times[c];

      var currentHeight = histogramStepHeight * currentTime;

      if (currentName === 'Вы') {
        ctx.fillStyle = histogramColumnMarkColor;
      } else {
        ctx.fillStyle = 'rgba(0, 0 , 255, 0.' + getRandomInteger(1, 9) + ')';
      }

      ctx.fillRect(histogramColumnStartPositionX, HEIGHT_HISTOGRAM_CLOUD - currentHeight - 16, histogramColumnWidth, currentHeight);
      ctx.fillStyle = '#000';
      ctx.font = '16px PT Mono';
      ctx.fillText(Math.floor(currentTime), histogramColumnStartPositionX, HEIGHT_HISTOGRAM_CLOUD - currentHeight - 20);
      ctx.fillStyle = '#000';
      ctx.font = '16px PT Mono';
      ctx.fillText(currentName, histogramColumnStartPositionX, HEIGHT_HISTOGRAM_CLOUD);

      histogramColumnStartPositionX += histogramColumnWidth + histogramColumnOffset;

    }

  };
