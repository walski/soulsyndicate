(function() {

  $(function() {
    var body, browserWindow, canvas, init, reactToScroll, resizeImages, scrollTimeout;
    body = $('body');
    canvas = $('#canvas');
    browserWindow = $(window);
    scrollTimeout = null;
    window.lurch.environment = {
      width: 0,
      height: 0
    };
    resizeImages = function() {
      window.lurch.environment.width = browserWindow.width();
      canvas.width(window.lurch.toc.length * window.lurch.environment.width);
      window.lurch.environment.height = browserWindow.height();
      canvas.height(window.lurch.environment.height);
      canvas.find('.chapter').height(window.lurch.environment.height).width(window.lurch.environment.width);
      return window.lurch.navigation.reset();
    };
    reactToScroll = function() {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      return scrollTimeout = setTimeout(window.lurch.navigation.adjustSelection, 100);
    };
    init = function() {
      var chapter, chapterName, _i, _len, _ref;
      _ref = window.lurch.toc;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        chapterName = _ref[_i];
        chapter = window.lurch.chapters[chapterName];
        canvas.append(JST['images/chapter']({
          images: chapter.images
        }));
      }
      return resizeImages();
    };
    browserWindow.resize(resizeImages);
    browserWindow.scroll(reactToScroll);
    return init();
  });

}).call(this);
