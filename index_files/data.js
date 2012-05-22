(function() {

  window.lurch || (window.lurch = {});

  window.lurch.toc = ['san_francisco', 'lissabon'];

  window.lurch.chapters = {
    san_francisco: {
      title: 'San Francisco',
      images: [
        {
          url: '/assets/1.jpg'
        }, {
          url: '/assets/2.jpg'
        }, {
          url: '/assets/3.jpg'
        }
      ]
    },
    lissabon: {
      title: 'Lissabon',
      images: [
        {
          url: '/assets/4.jpg'
        }, {
          url: '/assets/5.jpg'
        }, {
          url: '/assets/6.jpg'
        }
      ]
    },
    byIndex: function(index) {
      return window.lurch.chapters[window.lurch.toc[index]];
    }
  };

}).call(this);
