var dataLayer = window.dataLayer || [];
var mode = 'dataLayer';

function sendEvent(mode, eventName, eventCategory, eventAction, eventLabel) {
    var params;
    params = {
        event: eventName,
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel
    }

    if (mode === 'dataLayer') {
        dataLayer.push(params);
    }
}

$('.nav-phone ul li').click(function () {
    var id = $(this).attr('id').replace('-scroll', '');
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'menu-' + id, 'modulo-inicio');
});

$('.nav-phone-scroll a').click(function () {
    var id = $(this).attr('href').replace('#', '');
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'bullet-' + id, 'bullet');
});

$('.nav-phone-scroll-mobile a').click(function () {
    var id = $(this).attr('href').replace('#', '');
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'menu-' + id, 'modulo-inicio');
});


$('.back-to-catalog').click(function () {
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'boton-volver', 'modulo-inicio');
});


$('.section-1 .button').click(function () {
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'seccion1-boton', 'modulo-negocio');
});

// $('.section-2 .button').click(function () {
//sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'seccion2-boton', 'modulo-negocio');
// });

$('.section-3 .button').click(function () {
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'seccion3-boton', 'modulo-negocio');
});

$('.section-4 #tabs-phones ul li').click(function () {
    var id = $(this).text().replace(/ /g, "-");
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'tab-' + id, 'modulo-celulares');
});


$('.section-4 .slider-phones .slide .card-phone').click(function () {

    var body_card = $(this).children()[1];

    $(body_card).each(function () {
        var id = $(this).children()[0].innerText.replace(/ /g, "-");
        sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'carrusel-' + id, 'modulo-celulares');
    })
});


$('.section-4 .container-button .button').click(function () {
    var id = $(this)[0].innerText.replace(/ /g, "-");
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'backlink-' + id, 'modulo-celulares');
});

$('.section-5 .button').click(function () {
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'seccion1-boton', 'modulo-performance');
});

$('.section-6 #tabs-accessories ul li').click(function () {
    var id = $(this).text().replace(/ /g, "-");
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'tab-' + id, 'modulo-accesorios');
});


$('.section-6 .slider-accessories .slide .card-phone').click(function () {

    var body_card = $(this).children()[1];

    $(body_card).each(function () {
        var id = $(this).children()[0].innerText.replace(/ /g, "-");
        sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'carrusel-' + id, 'modulo-accesorios');
    })
});

$('.section-6 .container-button .button').click(function () {
    var id = $(this)[0].innerText.replace(/ /g, "-");
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'backlink-' + id, 'modulo-accesorios');
});

$('.section-7 .button').click(function () {
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'seccion1-boton', 'modulo-beneficios');
});

$('.section-8 .form-movistar .button').click(function () {
    var id = $(this)[0].innerText.replace(/ /g, "-");
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'seccion1-' + id, 'modulo-contacto');
});


$('.section-9 .slider-bussiness li').click(function () {
    var body_card = $(this).children()[0];
    $(body_card).each(function () {
        var box_text = $(this).children()[2];
        $(box_text).each(function () {
            var id = $(this).children()[0].innerText.replace(/ /g, "-");
            sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'servicios-' + id, 'modulo-crossSelling');
        })
    })
});

$('.section-10 .button').click(function () {
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'atributo-boton', 'modulo-crossSelling');
});

$('.section-11 .slider-brands li').click(function () {
    var id = $(this).attr('id');
    sendEvent(mode, 'eventInteraction', 'landingPageMarcas', 'otrasmarcas-' + id, 'modulo-crossSelling');
});

