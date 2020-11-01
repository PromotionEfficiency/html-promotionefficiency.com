let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 26.305914,
            lng: 50.223589
        },
        zoom: 17,
        clickableIcons: false,
        disableDefaultUI: true,
        styles: [{
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [{
                    "saturation": "-100"
                }]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": "50"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "saturation": "-100"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [{
                    "lightness": "30"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "lightness": "40"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -97
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            }
        ]
    });
}

// Set Background Images for team members
$(document).ready(function () {
    var bgImg = $("[data-bg-src]");
    bgImg.each(function () {
        var bgImg = $(this),
            imgSrc = bgImg.data("bg-src");
        bgImg.css("background-image", "url(" + imgSrc + ")")
    });
});


// Counters Up
$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


// Menu Overlay
$(document).ready(function () {
    $('#openNav').on('click', function () {
        $('#myNav').css("width", "100%");
    });

    $('#closeNav').on('click', function () {
        $('#myNav').css("width", "0%");
    });

    $('#myNav a').on('click', function () {
        $('#myNav').css("width", "0%");
    });
});

$(document).ready(function () {
    const header = document.querySelector('section#hero header')
    const nav = document.querySelector('section#hero header nav')
    document.addEventListener('scroll', () => {
        // check if scrollTop is higher than x amount
        stick_or_not()

    });
    stick_or_not()
    
});

function stick_or_not(){
    const header = document.querySelector('section#hero header')
    const nav = document.querySelector('section#hero header nav')
    if ($(window).scrollTop() > 100) {
        header.classList.add('sticky')
        nav.classList.remove('navbar-dark')
        nav.classList.add('navbar-light')
        nav.classList.add('text-white')
        nav.classList.remove('navbar-dark')

    } else {
        header.classList.remove('sticky')
        nav.classList.add('navbar-dark')
        nav.classList.remove('navbar-light')
        nav.classList.remove('text-white')
        nav.classList.add('navbar-dark')
    }
}

$(document).ready(function(){
    $('.services-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
                    {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
              dots: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('.clients-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
                    {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
              dots: true
            }
          }
      
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


      $('.team-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
                    {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
              dots: true
            }
          }
      
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });