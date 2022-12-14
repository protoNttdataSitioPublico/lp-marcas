$(function () {

    $(".slider-phones").slick({
        lazyLoad: 'ondemand',
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {

                    // centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {

                    centerPadding: '70px',
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 380,
                settings: {

                    centerPadding: '0px',
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(".slider-accessories").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        arrows: false,
        infinite: false,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {

                    centerPadding: '40px',
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(".slider-bussiness").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {

                    centerPadding: '70px',
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 376,
                settings: {

                    centerPadding: '65px',
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 322,
                settings: {

                    centerPadding: '40px',
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(".slider-brands").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    centerMode: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            
        ]
    });

    $("#tabs-phones li").on('click', function () {
        var filter = $(this).data('filter');

        $(".slider-phones").slick('slickUnfilter');

        if (filter === 'all') {
            $(".slider-phones").slick('slickUnfilter');
        }else{

            if(filter !== undefined){
                $(".slider-phones").slick('slickFilter', '.' + filter);
            }
        }

    })

    $("#tabs-accessories li").on('click', function () {
        var filter = $(this).data('filter');
        $(".slider-accessories").slick('slickUnfilter');

        if (filter == 'all') {
            $(".slider-accessories").slick('slickUnfilter');
        }else {
            $(".slider-accessories").slick('slickFilter', '.' + filter);
        }
    })

});