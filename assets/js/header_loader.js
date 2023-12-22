(function ($) {
    "use strict";

    $(document).ready(function ($) {
        
        // Cargar el encabezado
        $("#header").load("header.html");

        // Mostrar el loader mientras la página se carga
        $(".loader").fadeOut(1000);

        // Resaltar la sección actual en el menú
        var currentUrl = window.location.href;

        $(".main-menu ul li a").each(function() {
            var linkUrl = $(this).attr("href");

            // Utiliza endsWith para comparar las URL de manera más precisa
            if (currentUrl.endsWith(linkUrl)) {
                $(this).closest("li").addClass("current-list-item");
            }
        });

    });
}(jQuery));
