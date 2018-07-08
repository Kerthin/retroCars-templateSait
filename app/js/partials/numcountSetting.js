jQuery(document).ready(function($){
    var slider = $.fn.fsvs({
        autoPlay            : false,
        speed               : 1000,
        bodyID              : 'fsvs-body',
        selector            : '> .slide',
        mouseSwipeDisance   : 40,
        afterSlide          : function(){
            $(".number_count_liters").spincrement({
                thousandSeparator:  " ",
                duration:   3000,
                from:   0,
                to: 11.6,
                decimalPlaces:  1
            });
            $(".number_count_money").spincrement({
                thousandSeparator:  " ",
                duration:   3000,
                from:   0,
                to: 4800
            });
            $(".number_count_hp").spincrement({
                thousandSeparator:  " ",
                duration:   3000,
                from:   0,
                to: 60
            });
        },
        beforeSlide         : function(){},
        endSlide            : function(){},
        mouseWheelEvents    : true,
        mouseWheelDelay     : false,
        mouseDragEvents     : false,
        touchEvents         : true,
        arrowKeyEvents      : false,
        pagination          : false,
        nthClasses          : 2,
        detectHash          : false
    });
});