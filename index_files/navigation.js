(function() {
  var Navigation;

  Navigation = (function() {
    var _this = this;

    Navigation.name = 'Navigation';

    function Navigation() {}

    Navigation.chapter = 0;

    Navigation.image = 0;

    Navigation.scrollSpeed = 500;

    Navigation.setChapter = function(chapter) {
      if (!(chapter >= 0 && chapter < window.lurch.toc.length)) {
        return false;
      }
      return Navigation.chapter = chapter;
    };

    Navigation.setImage = function(image) {
      if (!(image >= 0 && image < window.lurch.chapters.byIndex(Navigation.chapter).images.length)) {
        return false;
      }
      return Navigation.image = image;
    };

    Navigation.reset = function() {
      Navigation.setChapter(Navigation.chapter);
      Navigation.setImage(Navigation.image);
      Navigation.disableScrollHandlingFor(Navigation.scrollSpeed);
      return Navigation.body().stop(true).animate({
        scrollLeft: Navigation.chapter * window.lurch.environment.width,
        scrollTop: Navigation.image * window.lurch.environment.height
      }, {
        duration: Navigation.scrollSpeed
      });
    };

    Navigation.adjustSelection = function() {
      var newChapter, newImage;
      if (Navigation.disableScrollHandling) {
        return;
      }
      newImage = Navigation.imageByScroll();
      if (newImage !== Navigation.image) {
        Navigation.image = newImage;
      }
      newChapter = Navigation.chapterByScroll();
      if (newChapter !== Navigation.chapter) {
        Navigation.chapter = newChapter;
      }
      return Navigation.reset();
    };

    Navigation.nextImage = function() {
      Navigation.setImage(Navigation.image + 1);
      return Navigation.reset();
    };

    Navigation.prevImage = function() {
      Navigation.setImage(Navigation.image - 1);
      return Navigation.reset();
    };

    Navigation.nextChapter = function() {
      Navigation.setChapter(Navigation.chapter + 1);
      return Navigation.reset();
    };

    Navigation.prevChapter = function() {
      Navigation.setChapter(Navigation.chapter - 1);
      return Navigation.reset();
    };

    Navigation.imageByScroll = function() {
      return Math.round(Navigation.body().scrollTop() / window.lurch.environment.height);
    };

    Navigation.chapterByScroll = function() {
      return Math.round(Navigation.body().scrollLeft() / window.lurch.environment.width);
    };

    Navigation.body = function() {
      return Navigation._body || (Navigation._body = $('body'));
    };

    Navigation.disableScrollHandlingFor = function(interval) {
      if (Navigation._reenableScrollHandlingTimeout) {
        clearTimeout(Navigation._reenableScrollHandlingTimeout);
      }
      Navigation.disableScrollHandling = true;
      return Navigation._reenableScrollHandlingTimeout = setTimeout((function() {
        return Navigation.disableScrollHandling = false;
      }), interval + 5);
    };

    return Navigation;

  }).call(this);

  window.lurch || (window.lurch = {});

  window.lurch.navigation = Navigation;

}).call(this);
