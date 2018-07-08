$(document).ready(function(){

    
    $(window).on("scroll", function(){
        var w_top   =   $(window).scrollTop();
        var e_top   =   $(".slide").offset().top;

        console.log(w_top   +   " " +   e_top);

        if(w_top    <  e_top){
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
        }
    });
});