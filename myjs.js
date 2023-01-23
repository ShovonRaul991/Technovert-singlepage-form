$(document).ready(function(){
    $(".job").hide();
    $('.Summary').hide();
    $('.colChange1').css({"background": "#2E96DB", 'color': 'white'});
    $('count1').on('click',function(){
        $(".Personal").hide();
        $(".job").hide();
        $('.Summary').hide();
    })
    $('.continue-button-1').on('click',function(){
        $('.colChange2').css({"background": "#2E96DB", 'color': 'white'});
        $(".Personal").hide();
        $(".job").show();
        $('.Summary').hide();
    });
    $('.continue-button-2').on('click',function(){
        $('.colChange3').css({"background": "#2E96DB", 'color': 'white'});
        $(".Personal").hide();
        $(".job").hide();
        $('.Summary').show();
    });
    $(".Profile-click").on('click', function(){
        if($('.Profile').is(':visible')){
            $('.Profile').hide();
        }
        else{
            $('.Profile').show();
            $('.Profile-click').text('-')
        }
    });
    $(".header-menu").on('click', function(){
        if($('.header').is(':visible')){
            $('.header').hide();
        }
        else{
            $('.header').show();
        }
    })

    $("#total_name").text("hggg");
});