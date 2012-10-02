// parallax stuff

function scrollEffect() {
    //Get the scoll position of the page
  scrollPos = $(this).scrollTop();

  $('.title').css({
    'margin-top': + (scrollPos / 3) + "px",
    'opacity': 1 - (scrollPos / 180)
  });

  $('.app, .section3').css({
    'background-position': 'center ' + (-scrollPos / 5) + "px"
  });

  $('.albums-holder').css({
    'background-position': '' - (-scrollPos / 2) + "px"
  });

  $('.intro').css({
    'background-position': 'center ' + (-scrollPos / 2) + "px"
  });

  if (scrollPos >= 350) {
    $(".nav-cta").fadeIn('slow');
  } else {
    $(".nav-cta").fadeOut();
  }

  if (scrollPos >= 2300 && scrollPos <= 2600) {
    $(".iphone").css({'background':'url(img/iphone-sprite.png) -365px 0 no-repeat'});
  }
  if (scrollPos >= 2600 && scrollPos <= 2900) {
    $(".iphone").css({'background':'url(img/iphone-sprite.png) -730px 0 no-repeat'});
  }
  if (scrollPos <= 2300) {
    $(".iphone").css({'background':''});
  }
}

$(window).scroll(function() {
    scrollEffect();
});

// QR code 
$('.iphone').click(function() {
  console.log(this)
  $(this).fadeOut(function() {
    $(this).fadeIn().css({'background':'url(img/iphone-sprite.png) -1095px 0 no-repeat'});
  });
})

//anchor smooth scrolling
function filterPath(string) {
  return string.replace(/^\//,'').replace(/(index|default).[a-zA-Z]{3,4}$/,'').replace(/\/$/,'');
}
var locationPath = filterPath(location.pathname);
$('a[href*=#]').each(function() {
  var thisPath = filterPath(this.pathname) || locationPath;
  if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/,'')) {
    var $target = $(this.hash), target = this.hash;
    if (target) {
      $(this).click(function(event) {
        event.preventDefault();
        var targetOffset = $target.offset().top;
        $('html, body').animate({scrollTop: targetOffset}, 500, 'linear', function() {
          location.hash = target;
        });
      });
    }
  }
});

// Analytics
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-35236279-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

