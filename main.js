$(document).ready(function () {
    var owl1 = $('.owl-3-auto');
    var owl2 = $('.owl-5-auto');
    var owl3 = $('.owl-5-notauto');
    owl1.owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        merge: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: false,
        nav: true
    });

    owl2.owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        merge: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: false,
        nav: true
    });

    owl3.owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        merge: true,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        dots: false,
        nav: true
    });

    $(".thoitrangsl").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".box-1").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".box-1").hide();
            }
        });
    }).change();

    $(".phukiensl").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".box-2").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".box-2").hide();
            }
        });
    }).change();

    $(".giaydepsl").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".box-3").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".box-3").hide();
            }
        });
    }).change();

    $(".dophuotsl").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".box-4").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".box-4").hide();
            }
        });
    }).change();

    $("#open-sidebar").click(function () {
        $('#my-sidebar').toggle();

        $("#body-overlay").css({
            "display": "block"
        });
    });

    $(document).click(function (e) {
        if (e.target.id != 'hideme' && !$('#hideme').find(e.target).length) {
            $("#my-sidebar").hide();

            $("#body-overlay").css({
                "display": "none"
            });
        }
    });
});
