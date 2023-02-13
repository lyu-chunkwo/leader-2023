$(function () {

  $('.info__tabs-item').not('.active').hide();
  $('.info__button-item').on('click', function (e) {
    e.preventDefault();

    var tabItem = $(this).closest('.info__button-item'),
      tabContentItem = $('.info__tabs-item'),
      tabItemPosition = tabItem.data('services');

    tabContentItem.filter('.info__tabs-item--' + tabItemPosition)
      .fadeIn()
      .siblings()
      .hide();

    $(e.currentTarget)
      .addClass('active')
      .siblings()
      .removeClass('active');
  });


  let time = 2, c = 1;
  $(window).on('scroll', function () {
    $('#counter').each(function () {
      let counterPos = $(this).offset().top,
        topWindow = $(window).scrollTop();
      if (counterPos < topWindow + 500) {
        if (c < 2) {
          $('.number').addClass('visible');
          $('div').each(function () {
            let i = 1,
              num = $(this).data('num'),
              step = 1000 * time / num,
              that = $(this),
              int = setInterval(function () {
                if (i <= num) {
                  that.html(i);
                }
                else {
                  c = c + 2;
                  clearInterval(int);
                }
                i++;
              }, step);
          });
        }
      }
    });
  });



  $('.partners__list').slick({
    autoplay: true,
    slidesToShow: 5,
    arrows: false,
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
  });


  $(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 50) {
      $('.scroll-top').addClass("stick");
    }
    else {
      $('.scroll-top').removeClass("stick");
    }
  });


  $(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 1000) {
      $('.scroll').addClass("active");
    }
    else {
      $('.scroll').removeClass("active");
    }
  });


  $('.menu__btn').on('click', function () {
    $('.menu__list, .menu__btn').toggleClass('active');
    $('body').toggleClass('lock'); // ! No scroll
  });
});