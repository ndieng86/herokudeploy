$(function(){
    $('#caption').hide();
    $('#caption').show(3000)
        $('#caption').on({
        mouseenter: function(){
            $(this).fadeOut(2000);
        },
        mouseleave: function(){
            $(this).fadeIn(2000);
        }

    });
  

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#topRetour').fadeIn();
        } else {
            $('#topRetour').fadeOut();
        }
    });
    $('#topRetour').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $("img").hover(function(){
                $(this).css('opacity','1')
                },
                function(){
                $(this).css('opacity', '.5')
                }); 
    $('input, textarea').mouseenter(function(){
                $(this).css('background-color','#000')              
                });
    $('#entete').dblclick(function(){
        $('body').fadeOut(1000);
        $('body').fadeToggle(1000);
    });
});

	