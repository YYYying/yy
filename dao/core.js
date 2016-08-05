define(["jquery"],function($){
     $(".btn").click(function(){
        $(this).next(".dropD").slideToggle().siblings(".dropD").slideUp();
                            $(this).removeClass("off").toggleClass("on").siblings(".btn").addClass("off");
    })
    $(".one").on("click",function(){
        $("#box1").show();
        $("#box2").hide();
    })
    $(".two").on("click",function(){
        $("#box2").show();
        $("#box1").hide();
    })
    $(".nav2").on("click",function(){
        $(".left .big").slideToggle()
    })
    $("button").on("click",function(){
        $(".center .content").hide();
        $(".center").css({"background":"none"})
    })
    
})