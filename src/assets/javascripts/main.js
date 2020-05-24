$(function ($) {
    "use strict";
 
    /*-------------------------------
        back to top
    ------------------------------*/
    $(document).on('click', '.bottomtotop', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        var $window = $(window);
        if ($window.scrollTop( ) > 0 ) {
            $(".header").addClass('nav-fixed');
        } else {
            $(".header").removeClass('nav-fixed');
        }

        /*---------------------------
            back to top show / hide
        ---------------------------*/
        var st = $(this).scrollTop();
        var ScrollTop = $('.bottomtotop');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
        lastScrollTop = st;

    });

    $(window).on('load', function () {
  
    /*---------------------
        Preloader
    -----------------------*/
    var preLoder = $("#preloader");
    preLoder.addClass('hide');
    var backtoTop = $('.back-to-top');
    /*-----------------------------
        back to top
    -----------------------------*/
    var backtoTop = $('.bottomtotop');
    backtoTop.fadeOut(100);
    });

});
/*------------Flat Picker---------------*/
! function(i) {
    "use strict";
    var e = function() {};
    e.prototype.init = function() {
        i("#basic-datepicker").flatpickr(),
        i("#basic-datepicker2").flatpickr(), 
        i("#basic-datepicker3").flatpickr(), 
        i("#basic-datepicker4").flatpickr(), 
        i("#basic-datepicker5").flatpickr(), 
        i("#basic-datepicker6").flatpickr()
    }, i.FormPickers = new e, i.FormPickers.Constructor = e
}(window.jQuery),
function(e) {
    "use strict";
    window.jQuery.FormPickers.init()
}();

/*--------Form Wizard-----------*/
$(document).ready(function() {
    "use strict";
    $("#basicwizard").bootstrapWizard(), $("#progressbarwizard").bootstrapWizard({
        onTabShow: function(t, r, a) {
            var o = (a + 1) / r.find("li").length * 100;
            $("#progressbarwizard").find(".bar").css({
                width: o + "%"
            })
        }
    }), $("#btnwizard").bootstrapWizard({
        nextSelector: ".button-next",
        previousSelector: ".button-previous",
        firstSelector: ".button-first",
        lastSelector: ".button-last"
    }), $("#rootwizard").bootstrapWizard({
        onNext: function(t, r, a) {
            var o = $($(t).data("targetForm"));
            if (o && (o.addClass("was-validated"), !1 === o[0].checkValidity())) return event.preventDefault(), event.stopPropagation(), !1
        }
    })
});