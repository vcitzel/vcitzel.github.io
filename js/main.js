$(function() {
  anchorizeImage = function($image) {
    return $(
      '<a class="js-fancybox" rel="group" href="' +
      $image.prop('src') +
      '" title="' +
      $image.prop('alt') +
      '"></a>'
    ).append($image.detach());
  };

  $('.js-with-images img').each(function() {
    anchorizeImage($(this)).appendTo($('.js-previews'));
  });

  $('.js-fancybox').fancybox({
    helpers: {
      title: {
        type: 'inside'
      }
    }
  });

  $('.js-slides img').each(function() {
    $(this).detach().prependTo($('.js-slides'));
  });
  $('.js-slides p').detach();

  $('.js-slides').slidesjs({
    height: 420,
    navigation: false,
    play: {
      auto: true
    }
  });
});
