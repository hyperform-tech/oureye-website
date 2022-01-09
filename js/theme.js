//readMore Card Function

$(function () {
  $(".readSingle").click(function () {
    $(".toggleClass")
      .not("#toggle" + $(this).attr("target"))
      .hide();
    $("#toggle" + $(this).attr("target")).toggle();
    if ($("#toggle" + $(this).attr("target")).is(":visible")) {
      $("#knowMore" + $(this).attr("target")).text("Read Less..");
    } else {
      $("#knowMore" + $(this).attr("target")).text("Read More ...");
    }
  });
});

$(function () {
  $(".showSingle").click(function () {
    $(".toggleClass")
      .not("#toggle" + $(this).attr("target"))
      .hide();
    $("#toggle" + $(this).attr("target")).toggle();
    if ($("#toggle" + $(this).attr("target")).is(":visible")) {
      $("#knowMore" + $(this).attr("target")).text("Read Less..");
    } else {
      $("#knowMore" + $(this).attr("target")).text("Know More");
    }
  });
});

function AddReadMore() {
  //This limit you can set after how much characters you want to show Read More.
  let carLmt = 350;
  // Text to show when text is collapsed
  let readMoreTxt = " ... Read More";
  // Text to show when text is expanded
  let readLessTxt = " Read Less..";

  //Traverse all selectors with this class and manupulate HTML part to show Read More
  $(".addReadMore").each(function () {
    if ($(this).find(".firstSec").length) return;

    let allstr = $(this).text();
    if ((allstr.length > carLmt && window.innerWidth <= 720) || ($(this).hasClass("desktopReadMore") && allstr.length > carLmt)) {
      let firstSet = allstr.substring(0, carLmt);
      let secdHalf = allstr.substring(carLmt, allstr.length);
      let strtoadd =
        firstSet +
        "<span class='SecSec'>" +
        secdHalf +
        "</span><span class='readMore'  title='Click to Show More'>" +
        readMoreTxt +
        "</span><span class='readLess' title='Click to Show Less'>" +
        readLessTxt +
        "</span>";
      $(this).html(strtoadd);
    }
  });
  //Read More and Read Less Click Event binding
  $(document).on("click", ".readMore,.readLess", function () {
    $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
  });
}
$(function () {
  //Calling function after Page Load
  AddReadMore();
});


$(document).ready(function () {
  var vismaAutoivoice = vismaAutoivoice || {};
  vismaAutoivoice.calculator = function () {
    var slider1 = document.getElementById("slider-autoinvoice-invoices"), //1 element to create slider
      slider2 = document.getElementById("slider-autoinvoice-digital"), //2 element to create slider
      savingRate = 63.55, //saved money kr per 1 invoice
      $result = $("#slider-result"); //calculation output element
    // Appending money-formatting (visual)
    var outputFormat = wNumb({
      prefix: "Kr ",
      decimals: 2,
      thousand: " ",
      mark: ","
    });
    //Create slider for invoice count
    noUiSlider.create(slider1, {
      start: 10000,
      step: 1000,
      tooltips: wNumb({
        decimals: 0,
        thousand: " "
      }),
      range: {
        min: 1000,
        max: 100000
      },
      connect: "lower"
    });
    //Create slider for digital % of invoice count
    noUiSlider.create(slider2, {
      start: 50,
      step: 1,
      tooltips: wNumb({
        decimals: 0
      }),
      range: {
        min: 0,
        max: 100
      },
      connect: "lower"
    });

    function calculateSavings(invoices, digital) {
      digital = digital / 100;
      var result = invoices * (1 - digital) * savingRate;
      console.log("total result: ", result, invoices, digital);
      $result.html(outputFormat.to(result))
    }
    //Default result before interaction with sliders
    var invoiceCount = Number(slider1.noUiSlider.get()),
      digitalCount = Number(slider2.noUiSlider.get());
    console.log(
      invoiceCount,
      digitalCount,
      typeof invoiceCount,
      //  invoiceCount + digitalCount
    );
    //calculate saved hours and update calculation output element's content
    var calculateMoney = function () {
      //Show calculation result on screen
      $amountSpan.html(mod);
    };
    /* var digitalInvoices = 80;
    digitalInvoices = digitalInvoices / 100;
    console.log(outputFormat.to(1000 * (1 - digitalInvoices) * savingRate), slider1);
*/
    function calculateMoney() {
      //Formula: totalInvoices * (1 - digitalInvoices)*savingRate
    }

    //User can input calculation value by slider or directly into input field
    //When the slider value changes, update the input and calculation output element's content
    calculateSavings(invoiceCount, digitalCount);

    slider1.noUiSlider.on("update", function (values, handle) {
      invoiceCount = Number(values[handle]);

      calculateSavings(invoiceCount, digitalCount);
      // console.log(" slider 1 ", invoiceCount, typeof invoiceCount);
      return invoiceCount;
    });


    slider2.noUiSlider.on("update", function (values, handle) {
      digitalCount = Number(values[handle]);
      calculateSavings(invoiceCount, digitalCount);

    });
  };

  vismaAutoivoice.calculator();
});



(function ($) {
  "use strict";

  // ----------------------------- Counter Function
  var timer = $('.timer');
  if (timer.length) {
    timer.appear(function () {
      timer.countTo();
    });
  }

  // ------------------------ Navigation Scroll
  $(window).on('scroll', function () {
    var sticky = $('.sticky-menu'),
      scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

  });
  // -------------------- From Bottom to Top Button
  //Check to see if the window is top if not then display button
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });

  //---------------------- Click event to scroll to top
  $('.scroll-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1500);
    return false;
  });
  // -------------------------- scroll animate
  var links = $('a.scroll-target');
  links.on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 120,
        }, 1000);
        return false;
      }
    }
  });
  // ----------------------------- MixItUp
  if ($(".mixitUp-container").length) {
    var containerEl = document.querySelector('.mixitUp-container');
    var mixer = mixitup(containerEl);
  };


  // ------------------------ Password Toggler
  if ($(".user-data-form").length) {
    $(".passVicon").on('click', function () {
      $(".passVicon").toggleClass("eye-slash");
      var input = $(".pass_log_id");
      if (input.attr("type") === "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }

    });
  }


  // ------------------------ Company Logo Slider
  if ($(".companies-logo-slider").length) {
    $('.companies-logo-slider').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 7,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: true,
            centerMode: true,
            slidesToShow: 5
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            slidesToShow: 2
          }
        }
      ]
    });
  }

  // ------------------------ Company Logo Slider
  if ($(".partnerSliderTwo").length) {
    $('.partnerSliderTwo').slick({
      centerMode: true,
      centerPadding: '0px',
      arrows: false,
      slidesToShow: 5,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            centerMode: true,
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            slidesToShow: 2
          }
        }
      ]
    });
  }

  // ------------------------ Client Feedback Slider One
  if ($(".clientSliderOne").length) {
    $('.clientSliderOne').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      prevArrow: $('.prev_c'),
      nextArrow: $('.next_c'),
      autoplay: true,
      autoplaySpeed: 6000,
    });
  }


  // ------------------------ Image Slick Slider 
  if ($(".img-slick-slider").length) {
    $('.img-slick-slider').slick({
      dots: true,
      arrows: false,
      centerPadding: '0px',
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 6000,
    });
  }



  // ------------------------ Client Feedback Slider Two
  if ($(".clientSliderTwo").length) {
    $('.clientSliderTwo').slick({
      dots: true,
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

  // ------------------------ Team Slider One
  if ($(".teamSliderOne").length) {
    $('.teamSliderOne').slick({
      dots: false,
      arrows: true,
      prevArrow: $('.prev_c'),
      nextArrow: $('.next_c'),
      centerPadding: '0px',
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }


  // ------------------------ Client Feedback Slider Three
  if ($(".clientSliderThree").length) {
    $('.clientSliderThree').slick({
      dots: false,
      arrows: true,
      prevArrow: $('.prevT'),
      nextArrow: $('.nextT'),
      centerPadding: '0px',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
    });
  }


  // ------------------------ Client Feedback Slider Four
  if ($(".clientSliderFour").length) {
    $('.clientSliderFour').slick({
      dots: true,
      arrows: false,
      centerPadding: '0px',
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }

  // ------------------------ Client Feedback Slider Five
  if ($(".clientSliderFive").length) {
    $('.clientSliderFive').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      prevArrow: $('.prev_f'),
      nextArrow: $('.next_f'),
      autoplay: true,
      autoplaySpeed: 6000,
    });
  }


  // ------------------------ Client Feedback Slider Six
  if ($(".clientSliderSix").length) {
    $('.clientSliderSix').slick({
      dots: true,
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }


  // ------------------------ Portfolio One 
  if ($(".portfolioSliderOne").length) {
    $('.portfolioSliderOne').slick({
      dots: false,
      arrows: true,
      prevArrow: $('.prev_c'),
      nextArrow: $('.next_c'),
      centerPadding: '0px',
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

  // ------------------------ App Screen Preview 
  if ($(".app-preview-slider-one").length) {
    $('.app-preview-slider-one').slick({
      dots: false,
      arrows: false,
      centerPadding: '0px',
      slidesToShow: 3,
      centerMode: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          }
        }
      ]
    });
  }


  // ------------------------ App Screen Preview Two
  if ($(".app-preview-slider-two").length) {
    $('.app-preview-slider-two').slick({
      dots: false,
      arrows: false,
      centerPadding: '0px',
      slidesToShow: 5,
      centerMode: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

  // ------------------------ Portfoli Slider One
  if ($(".portfolio_slider_one").length) {
    $('.portfolio_slider_one').slick({
      dots: false,
      arrows: true,
      prevArrow: $('.prev_case1'),
      nextArrow: $('.next_case1'),
      centerPadding: '0px',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      centerMode: true,
      autoplaySpeed: 3000,

    });
  }

  // -------------------- Remove Placeholder When Focus Or Click
  $("input,textarea").each(function () {
    $(this).data('holder', $(this).attr('placeholder'));
    $(this).on('focusin', function () {
      $(this).attr('placeholder', '');
    });
    $(this).on('focusout', function () {
      $(this).attr('placeholder', $(this).data('holder'));
    });
  });


  // -------------------------- Doc Sidebar
  var subMenu = $(".doc-sidebar ul li.dropdown-holder>h4"),
    secSubMenu = $(".doc-sidebar .sec-menu"),
    expender = $(".doc-sidebar ul li.dropdown-holder .expander");
  subMenu.on("click", function (e) {
    e.preventDefault();
  });

  subMenu.append(function () {
    return '<span class="expander"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>';
  });

  subMenu.on('click', function () {
    if ($(this).parent('li').children('ul').hasClass('show')) {
      $(this).parent('li').children('ul').removeClass('show');
    } else {
      $('.sub-menu.show').removeClass('show');
      $(this).parent('li').children('ul').addClass('show');
    };
  });

  secSubMenu.on('click', function () {
    if ($(this).parent('li').children('ul').hasClass('open')) {
      $(this).parent('li').children('ul').removeClass('open');
    } else {
      $('.sub-menu.open').removeClass('open');
      $(this).parent('li').children('ul').addClass('open');
    };
  });

  // -------------------------- Accordion
  var subMenu = $(".card .card-header");
  subMenu.on("click", function (e) {
    e.preventDefault();
  });


  subMenu.on('click', function () {
    if ($(this).parent('.card').children('.collapse').hasClass('show')) {
      $(this).parent('.card').children('.collapse').removeClass('show');
    } else {
      $('.collapse.show').removeClass('show');
      $(this).parent('.card').children('.collapse').addClass('show');
    };
  });

  // -------------------------- scroll animate
  if ($(".main-side-nav").length) {
    $('.main-side-nav a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 100)
          }, 800);
          return false;
        }
      }
    });
  }


  // -------------------------- Mobile Nav
  if ($(".theme-main-menu").length) {
    $('.theme-main-menu .navbar-toggler').on('click', function () {
      $(".navbar-collapse").toggleClass("show");
    });
  }
  // ----------------------- Closes responsive menu when a scroll trigger link is clicked
  $('#one-page-nav .nav-link').on('click', function () {
    $('.navbar-collapse').removeClass('show');
  })

  // -------------------------- Mobile Doc Side Nav
  if ($(".doc-sidebar").length) {
    $('.doc-sidebar .btn').on('click', function () {
      $(".doc-links").toggleClass("show");
    });
  }


  // -------------------------- JS tilt Effect
  if ($(".js-tilt").length) {
    $('.js-tilt').tilt({
      glare: true,
      maxGlare: .3
    })
  }

  // --------------------------------- Contact Form
  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  if ($("#contact-form").length) {
    $('#contact-form').validator();
    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
        var url = "inc/contact.php";

        // POST values in the background the the script URL
        $.ajax({
          type: "POST",
          url: url,
          data: $(this).serialize(),
          success: function (data) {
            // data = JSON object that contact.php returns

            // we recieve the type of the message: success x danger and apply it to the
            var messageAlert = 'alert-' + data.type;
            var messageText = data.message;

            // let's compose Bootstrap alert box HTML
            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

            // If we have messageAlert and messageText
            if (messageAlert && messageText) {
              // inject the alert to .messages div in our form
              $('#contact-form').find('.messages').html(alertBox);
              // empty the form
              $('#contact-form')[0].reset();
            }
          }
        });
        return false;
      }
    });
  }


  $(window).on('load', function () { // makes sure the whole site is loaded

    // -------------------- Site Preloader
    $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({ 'overflow': 'visible' });



    // ------------------------------- AOS Animation
    if ($("[data-aos]").length) {
      AOS.init({
        duration: 1000,
        mirror: true
      });
    }

    // ------------------------------------- Fancybox
    var fancy = $(".fancybox");
    if (fancy.length) {
      fancy.fancybox({
        arrows: true,
        buttons: [
          "zoom",
          //"share",
          "slideShow",
          //"fullScreen",
          //"download",
          "thumbs",
          "close"
        ],
        animationEffect: "zoom-in-out",
        transitionEffect: "zoom-in-out",
      });
    }


    // ------------------------------- AOS Animation
    if ($(".map-canvas").length) {
      var map = new google.maps.Map($(".map-canvas")[0], {
        zoom: 14,
        center: new google.maps.LatLng(40.72, -74),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        clickableIcons: false
      });

      var marker = new google.maps.Marker({
        map: map,
        draggable: true,
        position: new google.maps.LatLng(40.72, -74),
        visible: true
      });
    }

  });  //End On Load Function

})(jQuery);
