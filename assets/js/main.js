(function($) {

  $(function() {
    if ($.fn.fitVids) {
      $("#journal-content").fitVids();
    }

    if (hljs) {
      hljs.initHighlightingOnLoad();
    }

    var img = $('.journal-post-detail').find('.post-content').find('> p:first-child > img:first-child');
    var attr = img.attr('src');

    if (attr) {
      img.parent().addClass('hidden');
      $('#journal-header').css({ backgroundImage: 'url(\'' + attr + '\')' });
    }
  });

})(jQuery);
