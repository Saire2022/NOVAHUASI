(function ($) {
    "use strict";

    $(document).ready(function($){
        
        // Cargar el encabezado
        //$("#header").load("header.html");

        // testimonial sliders
        $(".testimonial-sliders").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:false,
                    loop:true
                }
            }
        });

        // homepage slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop:true
                },
                600:{
                    items:1,
                    nav:true,
                    loop:true
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true
                }
            }
        });

        // logo carousel
        $(".logo-carousel-inner").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            margin: 30,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:false,
                    loop:true
                }
            }
        });

        // count down
        if($('.time-countdown').length){  
            $('.time-countdown').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> ' + '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'));
            });
         });
        }

        // projects filters isotop
        $(".product-filters li").on('click', function () {
            
            $(".product-filters li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');

            $(".product-lists").isotope({
                filter: selector,
            });
            
        });
        
        // isotop inner
        $(".product-lists").isotope();

        // magnific popup
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // light box
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
        });

        // homepage slides animations
        $(".homepage-slider").on("translate.owl.carousel", function(){
            $(".hero-text-tablecell .subtitle").removeClass("animated fadeInUp").css({'opacity': '0'});
            $(".hero-text-tablecell h1").removeClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.3s'});
            $(".hero-btns").removeClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.5s'});
        });

        $(".homepage-slider").on("translated.owl.carousel", function(){
            $(".hero-text-tablecell .subtitle").addClass("animated fadeInUp").css({'opacity': '0'});
            $(".hero-text-tablecell h1").addClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.3s'});
            $(".hero-btns").addClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.5s'});
        });

       

        // stikcy js
        $("#sticker").sticky({
            topSpacing: 0
        });

        //mean menu
        $('.main-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });
        
         // search form
        $(".search-bar-icon").on("click", function(){
            $(".search-area").addClass("search-active");
        });

        $(".close-btn").on("click", function() {
            $(".search-area").removeClass("search-active");
        });
    
    });


    jQuery(window).on("load",function(){
        jQuery(".loader").fadeOut(1000);
    });

}(jQuery));

/* const datoNombre = document.querySelector('#datoNombre');
const datoEmail = document.querySelector('#datoEmail');
const datoMensaje = document.querySelector('#datoMensaje');

const btnEnviar = document.querySelector('#btnEnviar');

var mensaje;

function enviar() {
    console.log('Valor de datoNombre:', datoNombre.value);
    console.log('Valor de datoEmail:', datoEmail.value);
    console.log('Valor de datoMensaje:', datoMensaje.value);

    var encodedNombre = encodeURIComponent(datoNombre.value);
    var encodedEmail = encodeURIComponent(datoEmail.value);
    var encodedMensaje = encodeURIComponent(datoMensaje.value);

    mensaje = `https://api.whatsapp.com/send?phone=+5930993887203&text=Saludos mi nombre es:${encodedNombre}%0A Correo:${encodedEmail}%0A Necesito agendar (fecha y hora:)${encodedMensaje}`;
    console.log(mensaje);
    window.open(mensaje, '_blank').focus()	;		

}

const btnEnviar2 = document.querySelector('#btnEnviar2');
btnEnviar2.addEventListener('click', function () {
    enviar(
        document.querySelector('#datoNombre2'),
        document.querySelector('#datoEmail2'),
        document.querySelector('#datoMensaje2')
    );
});
 */


function enviar(datoNombre,datoEmail,datoMensaje) {

    console.log('Valor de datoNombre:', datoNombre.value);
    console.log('Valor de datoEmail:', datoEmail.value);
    console.log('Valor de datoMensaje:', datoMensaje.value);

    var encodedNombre = encodeURIComponent(datoNombre.value);
    var encodedEmail = encodeURIComponent(datoEmail.value);
    var encodedMensaje = encodeURIComponent(datoMensaje.value);

    var mensaje = `https://api.whatsapp.com/send?phone=+5930993887203&text=Saludos mi nombre es:${encodedNombre}%0A Correo:${encodedEmail}%0A Necesito agendar (fecha y hora:)${encodedMensaje}`;
    console.log(mensaje);
    // Try to open the WhatsApp URL in a new window
    var newWindow = window.open(mensaje, '_blank');

    // Check if the new window was successfully opened
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // If not, navigate the current window to the WhatsApp URL
        //window.location.href = mensaje;
        //window.open(mensaje, '_blank');

    }
}

function enviarProducto(userName, productName, productLocation, userLocation, message) {
    console.log('Nombre del usuario:', userName.value);
    console.log('Nombre del producto:', productName.value);
    console.log('Product Location:', productLocation.value);
    console.log('User Location:', userLocation.value);
    console.log('Message:', message.value);

    var encodedUserName = encodeURIComponent(userName.value);
    var encodedProductName = encodeURIComponent(productName.value);
    var encodedProductLocation = encodeURIComponent(productLocation.value);
    var encodedUserLocation = encodeURIComponent(userLocation.value);
    var encodedMessage = encodeURIComponent(message.value);

    var mensaje = `https://api.whatsapp.com/send?phone=+5930993887203&text=Usuario:${encodedUserName}%0A Producto:${encodedProductName}%0A Ubicación del producto:${encodedProductLocation}%0A Ubicación del usuario:${encodedUserLocation}%0A Mensaje:${encodedMessage}`;
    console.log(mensaje);

    // Try to open the WhatsApp URL in a new window
    var newWindow = window.open(mensaje, '_blank');

    // Check if the new window was successfully opened
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // If not, navigate the current window to the WhatsApp URL
        window.location.href = mensaje;
    }
}

// Add similar event listeners for other buttons as needed
