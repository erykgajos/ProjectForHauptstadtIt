function pageLoaded(){
	$(".fullLogo").addClass("animated fadeIn");
	
	setTimeout(function(){
    
	$(".fullLogo").hide();
	$(".splitLogo").show();
	
	$(".logoPart1").addClass("animated fadeOutLeftUp");
	$(".logoPart2").addClass("animated fadeOutRightUp");
	$(".logoPart3").addClass("animated fadeOutLeftDown");
	$(".logoPart4").addClass("animated fadeOutRightDown");
	
	}, 2000);
}