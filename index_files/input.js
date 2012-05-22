(function() {

  $(function() {
    var navigation;
    navigation = window.lurch.navigation;
    key('down', function() {
      return navigation.nextImage() && false;
    });
    key('up', function() {
      return navigation.prevImage() && false;
    });
    key('right', function() {
      return navigation.nextChapter() && false;
    });
    return key('left', function() {
      return navigation.prevChapter() && false;
    });
  });

}).call(this);
