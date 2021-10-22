// MUSIC PLAYER BY GLENTHEMES

// you may study the code to see how I did things but please do not steal or claim as your own!
// learning resource 01: https://www.w3schools.com/jsref/dom_obj_audio.asp
// learning resource 02: https://www.w3schools.com/tags/tag_audio.asp


$(document).ready(function(){
$(window).load(function(){
    
var mt_W = $(".m-txt").outerWidth();

$("#glenjams-05").css("margin-left",-mt_W);

$("#glenjams-05").css("visibility","visible");
    
$("#glenjams-05").hover(function(){
    if (!$(".nebula").hasClass("h0v")) {
        $(".nebula").dequeue().stop().animate({marginLeft:mt_W},400);
    }
}, function() {
    $(".nebula").addClass("h0v").animate({marginLeft:0},400,function() {
        $(this).removeClass("h0v").dequeue();
    });
});//hover end

var aaa = document.getElementById("audio");
$(".fire").click(function() {
    $(".playy").toggleClass("beff");
    $(".pausee").toggleClass("aff");
    if (aaa.paused)
      aaa.play();
    else
      aaa.pause();
});

var on9 = document.getElementById("audio");
on9.onended = function() {
    $(".playy").removeClass("beff");
	$(".pausee").removeClass("aff");
};
});// end winload
});//end ready
