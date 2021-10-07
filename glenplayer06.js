$(document).ready(function(){

fetch("//dl.dropbox.com/s/bzbc64oij7f3gse/vinyl-svg.html")
.then(get_vinylsvg => {
  return get_vinylsvg.text()
})
.then(get_vinylsvg => {
  $(".vinyl").html(get_vinylsvg);
});

$(".glenjams-06").show();

var aaa = document.getElementById("audio");

var hasAutoplay = $("#audio").attr("autoplay");

if (typeof hasAutoplay !== typeof undefined && hasAutoplay !== false) {
    $(".vinyl").addClass("vinyl-spin");
    $(".pausee").addClass("aff");
    $(".playy").addClass("beff");
}
    
$(".music-controls").click(function(){
    if (aaa.paused) {
      aaa.play();
      $(".vinyl").addClass("vinyl-spin");
      $(".vinyl").removeClass("vinyl-pause");
      $(".pausee").toggleClass("aff");
      $(".playy").toggleClass("beff");
    } else {
      aaa.pause();
      $(".vinyl").addClass("vinyl-pause");
      $(".playy").toggleClass("beff");
      $(".pausee").toggleClass("aff");
    }
});

aaa.onended = function(){
    $(".playy").removeClass("beff");
	$(".pausee").removeClass("aff");
	$(".vinyl").addClass("vinyl-pause");
};

});// ready end
