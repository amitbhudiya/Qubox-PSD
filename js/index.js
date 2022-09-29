$(document).ready(function () {
    $('.banner').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,

    });
    if ($(window).width() < 769) {
        $('.usp').slick({
            infinite: false,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 426,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                }
            ]

        });
    }
    $('.productslider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        prevArrow: '.productprev',
        nextArrow: '.productnext',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            }
            ,
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
            ,
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.newproductslider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        prevArrow: '.newproductprev',
        nextArrow: '.newproductnext',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            }
            ,
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
            ,
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });
    $('.testslider').slick({
        infinite: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '.testprev',
        nextArrow: '.testnext',
        responsive: [
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });
    $('.instaslider').slick({
        infinite: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                }
            }
            ,
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
            ,
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $(".hoverpreview").click(function () {
        var $src = $(this).parent().children().attr("src")
        $(".show").fadeIn(1);
        $(".img-show img").attr("src", $src);
    });

    $("span, .overlay").click(function () {
        $(".show").fadeOut(1);
    });

    $(".hoverpreview").click(function () {
        var $src = $(this).parent().children().attr("src")
        $(".newshow").fadeIn(1);
        $(".newimg-show img").attr("src", $src);
    });
    $("span, .newoverlay").click(function () {
        $(".newshow").fadeOut(1);
    });

    $('.solidbars').click(function () {
        $('.navbarcontent').toggleClass('active')
    });

    $('.sidehead ul li').click(function () {
        $('.subuser').toggleClass('active')
    });

    $('#productul').click(function () {
        $('#productul .subul').toggleClass('active')
    });

    $('#brandsul').click(function () {
        $('#brandsul .subul').toggleClass('active')
    });


});