$(function() {
  // stellar stuff
  $.stellar.positionProperty.star2 = {
    setTop: function($el, newTop, originalTop) {
      $el.css({
        'top': newTop,
        'left': $el.hasClass('star2') ? originalTop - newTop : 0
      });
    },
    setLeft: function($el, newLeft, originalLeft) {
      $el.css('left', newLeft);
    }
  };

  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 0,
    horizontalOffset: 0,
    responsive: true,
    hideDistantElements: false,
    positionProperty: 'star2'
  });

  // not sure how to get this working.

  // $.stellar.positionProperty.limit = {
  // setTop: function($element, newTop, originalTop) {
  //   var limit = 1300;
  //   // Check if we're going over the limit
  //   if (newTop - originalTop > limit) {
  //     // Call default position property with our limited value
  //     $.stellar.positionProperty.position.setTop.call(null, $element, originalTop - limit, originalTop);
  //   } else {
  //     // Otherwise, delegate to the 'setTop' method of the 'position' adapter
  //     $.stellar.positionProperty.position.setTop.apply(null, arguments);
  //   }
  //   $element = $('.li');
  // },
  //   // Nothing custom needed here, so we'll just use the built in adapter:
  //   setLeft: $.stellar.positionProperty.position.setLeft

  // };

  // positions
  var containerPosition = $('body').offset();
  var scrollPosition = $(window).scrollTop();
  var degreeRotate = 0;
  
  // stars & hearts
  var star1Rotate = 0;
  var heart1Rotate = 0;
  $(document).scroll(function() {
    var newScroll = $(window).scrollTop();
    if (scrollPosition > newScroll) {
        degreeRotate -= 5;
    } else {
        degreeRotate += 5;
    }

    star1Rotate = degreeRotate;
    heart1Rotate = degreeRotate;
    scrollPosition = newScroll;

    browser_transform_star('#star1', star1Rotate);
    browser_transform_star('#star2', star1Rotate);
    browser_transform_star('#star3', star1Rotate);
    browser_transform_star('#star4', star1Rotate);
    browser_transform_star('#star5', star1Rotate);
    browser_transform_heart('#heart1', heart1Rotate);
    browser_transform_heart('#heart2', heart1Rotate);
    browser_transform_heart('#heart3', heart1Rotate);
    browser_transform_heart('#heart5', heart1Rotate);
  });
});

// actual rotating and cross browsers
function browser_transform_heart(transTarget, transValue) {
  $(transTarget).css('-ms-transform:', 'rotateY(' + transValue + 'deg)');
  $(transTarget).css('-moz-transform', 'rotateY(' + transValue + 'deg)');
  $(transTarget).css('-webkit-transform', 'rotateY(' + transValue + 'deg)');
  $(transTarget).css('-o-transform', 'rotateY(' + transValue + 'deg)');
  $(transTarget).css('transform', 'rotateY(' + transValue + 'deg)');
}

function browser_transform_star(transTarget, transValue) {
  $(transTarget).css('-ms-transform:', 'rotate(' + transValue + 'deg)');
  $(transTarget).css('-moz-transform', 'rotate(' + transValue + 'deg)');
  $(transTarget).css('-webkit-transform', 'rotate(' + transValue + 'deg)');
  $(transTarget).css('-o-transform', 'rotate(' + transValue + 'deg)');
  $(transTarget).css('transform', 'rotate(' + transValue + 'deg)');
}

