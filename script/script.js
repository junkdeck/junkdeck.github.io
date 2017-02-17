$(document).ready(function(){

	/*$(".midbox").center(false);
	$('p').center(true);*/

	var email = "hello@mslsr.com";
	var emailBody = ""
	var subject = "";
	$opacityOff = 0.5
	$opacityOn = 0.5
	$(".midbox").css({opacity: $opacityOff});
	$(".midbox").hover(function(){
		$(this).fadeTo(150, $opacityOn);
	}, function(){
		$(this).fadeTo(250, $opacityOff);
	});
	/*$(".midbox").click(function(){
		window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
	});*/
});
