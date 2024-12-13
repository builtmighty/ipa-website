(function ($) {
  'use strict';
  /*---------------------------------
      Preloader JS
  -----------------------------------*/
  var prealoaderOption = $(window);
  prealoaderOption.on("load", function () {
    var preloader = jQuery('.lds-ripple');
    var preloaderArea = jQuery('.preloader');
    preloader.fadeOut();
    preloaderArea.delay(350).fadeOut('slow');
  });
  /*---------------------------------
      Preloader JS
  -----------------------------------*/

  /*---------------------------------  
      sticky header JS
  -----------------------------------*/
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".header_area").removeClass("sticky");
    } else {
      $(".header_area").addClass("sticky");
    }
  });
  /*---------------------------------  
      sticky header JS
  -----------------------------------*/
  /*---------------------- 
      Slick slider js
  ------------------------*/
  $('.hero_slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.project_button button').on('click', function () {
    $('.project_button button').removeClass('active_btn');
    var filterValues = $(this).data('filter');
    $('.projects_slider_content').slick('slickUnfilter');
    $('.projects_slider_content').slick('slickFilter', filterValues);
    $(this).addClass('active_btn');
  });
  $('.blog_button button').on('click', function () {
    $('.blog_button button').removeClass('active_btn');
    var filterValues = $(this).data('filter');
    $('.blogs_slider_content').slick('slickUnfilter');
    $('.blogs_slider_content').slick('slickFilter', filterValues);
    $(this).addClass('active_btn');
  });
  $('.projects_slider_content').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.blogs_slider_content').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.testimonial_slide').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1
  });
  /*---------------------- 
      Slick slider js
  ------------------------*/
  /*---------------------- 
      mobile menu js
  ------------------------*/
  $(".menu_icon,.close_btn").on('click', function (e) {
    e.preventDefault();
    $(".menu_icon").toggleClass("active");
  });
  $(".menu_icon,.close_btn").on('click', function (e) {
    e.preventDefault();
    $(".sidenav_menu").toggleClass("active");
  });
  $.sidebarMenu($('.sidebar-menu'))
  /*---------------------- 
      Isotope js
  ------------------------*/
  $('#project').imagesLoaded(function () {
    var $grid = $('.grid_wrapper').isotope({
      itemSelector: '.single_project',
      layoutMode: 'fitRows'
    })
    $('.project_button_2').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    $('.project_button_2').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.active_btn').removeClass('active_btn');
        $(this).addClass('active_btn');
      });
    });
  });
  /*---------------------- 
      Isotope js
  ------------------------*/
  /*---------------------- 
      Isotope js
  ------------------------*/
  // wow js
  new WOW().init();


  if ($("#search-input").length > 0) {

    var sjs = SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/search.json'
    });
  }

  var map = new jsVectorMap({
    selector: "#map",
    map: "world",
    selectedRegions: ['EG', 'US'],
    regions: {
      EG: {
        name: "Egypt",
        link: "https://www.google.com"
      },
      US: {
        name: "United States",
        link: "https://www.google.com"
      }
    },
    onRegionClick: function (event, code) {
      // Open link if region is selected
      if (this.params.selectedRegions.indexOf(code) !== -1) {
        window.open(this.params.regions[code].link, '_blank');
      }
    }
  });

  // new svgMap({
  //   targetElementID: 'svgMapExample',
  //   noDataText: null,
  //   touchLink: true,
  //   data: {
  //     data: {
  //       gdp: {
  //         name: 'GDP per capita',
  //         format: '{0} USD',
  //         thousandSeparator: ',',
  //         thresholdMax: 50000,
  //         thresholdMin: 1000
  //       },
  //       change: {
  //         name: 'Change to year before',
  //         format: '{0} %'
  //       }
  //     },
  //     applyData: 'gdp',
  //     values: {
  //       AF: { gdp: 587, change: 4.73, link: 'https://www.google.com', linkTarget: '_blank' },
  //       AL: { gdp: 4583, change: 11.09, link: 'https://www.google.com', linkTarget: '_blank' },
  //       DZ: { gdp: 4293, change: 10.01, link: 'https://www.google.com', linkTarget: '_blank' },
  //       NM: { gdp: 4293, change: 10.01, link: 'https://www.google.com', linkTarget: '_blank' },
  //       // ...
  //     }
  //   }
  // });

  // Language switcher
  function languageSwitcher() {
    const lang = document.getElementById('language_select'),
          selectedLang = lang.options[lang.selectedIndex].value;

    window.location.href = selectedLang;
  }
  // Init language switcher
  document.getElementById('language_select').addEventListener('change', languageSwitcher);
})(window.jQuery);