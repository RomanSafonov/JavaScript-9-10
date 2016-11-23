/**
 * Created by ggm on 27-Mar-16.
 */
/*---------H1 JQUERY COLOR---------------------------------------*/
$(function () {
    var $h1 = $('h1');
    $h1.on('mouseover', function () {
        $h1.animate({
            backgroundColor: "#1b7e7e"
        }, 500, function () {
            //$h1.css('background', '#1b7e7e');
            $h1.stop(true);
        });
    });
    $h1.on('mouseout', function () {
        $h1.animate({
            backgroundColor: "#24a8a8"
        }, 500, function () {
            //$h1.css('background', '#24a8a8');
        });
    });
    var $v_mouse = $('.dropdown a');
    $v_mouse.one('mouseover', function (e) {
        e.preventDefault();
    });

});
/* --------- MULTI LEVEL MENU -------------- */
$(document).ready(function () {
    $('.dropdown').hover(
        function () {
            var $open_menu = $(this).children('.sub-menu');
            $open_menu.slideDown(300);
            $open_menu.animate({
                backgroundColor: "#1b7e7e",
            }, 300, function () {
                $open_menu.stop(true);
            });
        },

        function () {
            var $v_menu = $(this).children('.sub-menu');
            $v_menu.slideUp(300);
            $v_menu.animate({
                backgroundColor: "#24a8a8"
            }, 300, function () {
            });
            //$v_menu.stop(true);
        });
});

/* ------------  SELECT-BOX  ---------------------*/
$(function () {
    $("#country_id").selectbox();
});

/* ------------CHECKBOX---------------------*/
$(document).ready(function () {
    $(".demo input[type=checkbox], .demo input[type=radio]").picker();

    $(window).one("pronto.load", function () {
        $(".demo input[type=checkbox], .demo input[type=radio]").picker("destroy");
    });
});

/* ------------  CHECK-BOX  ---------------------*/
$(function () {
    var $ch = $('.checkbox__input-jsq');

    function toggleCheck(it) {
        it.toggleClass('isChecked');
    }

    $ch.on('click', function (e) {
        e.preventDefault();
        toggleCheck($(this));
    });

});