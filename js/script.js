$('document').ready(function(){
    $('.angle').click(function(){
        $('.section1').animate({
            opacity:'0.8',
            marginTop:'-49%',
            display:'none'
        },500,function(){
            $('.section2').css({
                display:'block',
                marginTop:'0%'
            }); 
        });
    
    });
});