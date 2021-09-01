$(window).on("scroll resize",function(){
    $(".main-title").each(function(){
        var title_top = $(this).offset().top - $(window).height()*5/6;
        if($(window).scrollTop()>title_top) {
            $(this).children(".title-bar").addClass("active");
        }else {
            $(this).children(".title-bar").removeClass("active");
        }
    })
})

$(".gototop").click(function(){
    $("html,body").animate({scrollTop:0},parseInt(300));
})

$(".think").click(function(){
    $(this).addClass("active");
    $(".step-text").children(".original").hide();
    $(".step-text").children(".step1").fadeIn(300).addClass("active");
    $(".say").addClass("flash");
})