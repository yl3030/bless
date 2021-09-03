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

// 想、念、願
$(".think").click(function(){
    $(".step-text").children("p").hide().removeClass("active");
    // $(".step-text").children(".original").hide();
    $(".step-text").children(".step1").fadeIn(300).addClass("active");
    $(".step").children(".text").removeClass("flash active");
    $(this).addClass("active");
    $(".say").addClass("flash");
})
$(".say").click(function(){
    $(".step-text").children("p").hide().removeClass("active");
    $(".step-text").children(".step2").fadeIn(300).addClass("active");
    $(".step").children(".text").removeClass("flash active");
    $(this).addClass("active");
    $(".will").addClass("flash");
})
$(".will").click(function(){
    $(".step-text").children("p").hide().removeClass("active");
    $(".step-text").children(".step3").fadeIn(300).addClass("active");
    $(".step").children(".text").removeClass("flash active");
    $(this).addClass("active");
    // $(".will").addClass("flash");
})

// menu
$(".menu-nav").children("li").click(function(){
    $(this).toggleClass("active");
    $(this).children(".sub-menu").slideToggle(300);
})
$(".menu-icon").click(function(){
    $(this).toggleClass("active");
    $(".main-menu").toggleClass("active");
})
