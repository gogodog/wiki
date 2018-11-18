                           

(function ($) { "use strict";
	
/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

// window.load = function () {
// 	document.getElementById('preloader').style.display = 'none';
// }

$(window).on("load",function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});

/* ========================================================================= */
/*	Portfolio Filtering Hook
/* =========================================================================  */
$(function(){
		$('#portfolio-items-wrapper').mixItUp();
});



/* ========================================================================= */
/*	Testimonial Carousel
/* =========================================================================  */

$("#clients-slider").owlCarousel({
	slideSpeed: 300,
	paginationSpeed: 300,
	autoPlay: true,
	beforeMove: false,
	pagination: true,
	nav:true,
	lazyLoad:true,
	center:true,
});


/* ========================================================================= */
/*   Contact Form Validating
/* ========================================================================= */


$('#contact-submit').click(function (e) {

	//stop the form from being submitted
	e.preventDefault();

	/* declare the variables, var error is the variable that we use on the end
	to determine if there was an error or not */
	var error = false;
	var name = $('#name').val();
	var email = $('#email').val();
	var subject = $('#subject').val();
	var message = $('#message').val();

	/* in the next section we do the checking by using VARIABLE.length
	where VARIABLE is the variable we are checking (like name, email),
	length is a JavaScript function to get the number of characters.
	And as you can see if the num of characters is 0 we set the error
	variable to true and show the name_error div with the fadeIn effect. 
	if it's not 0 then we fadeOut the div( that's if the div is shown and
	the error is fixed it fadesOut. 
	
	The only difference from these checks is the email checking, we have
	email.indexOf('@') which checks if there is @ in the email input field.
	This JavaScript function will return -1 if no occurrence have been found.*/
	if (name.length == 0) {
		var error = true;
		$('#name').css("border-color", "#D8000C");
	} else {
		$('#name').css("border-color", "#666");
	}
	if (email.length == 0 || email.indexOf('@') == '-1') {
		var error = true;
		$('#email').css("border-color", "#D8000C");
	} else {
		$('#email').css("border-color", "#666");
	}
	if (subject.length == 0) {
		var error = true;
		$('#subject').css("border-color", "#D8000C");
	} else {
		$('#subject').css("border-color", "#666");
	}
	if (message.length == 0) {
		var error = true;
		$('#message').css("border-color", "#D8000C");
	} else {
		$('#message').css("border-color", "#666");
	}
});


/* ========================================================================= */
/*	On scroll fade/bounce effect
/* ========================================================================= */
smoothScroll.init();

$(window).scroll(function() {    
var scroll = $(window).scrollTop();
//console.log(scroll);
if (scroll > 200) {
	//console.log('a');
	//$(".navigation").addClass("sticky-header");
} else {
	//console.log('a');
	//$(".navigation").removeClass("sticky-header");
}});


})(jQuery);





// Styles Switcher
jQuery(document).ready(function(){

// Show Colors Panel
jQuery('#show-panel').click(function(){
	if(jQuery(this).hasClass('show-panel')) {
		jQuery('.colors-switcher').css({'right': 0});
		jQuery('#show-panel').removeClass('show-panel');
		jQuery('#show-panel').addClass('hide-panel');
	}else if(jQuery(this).hasClass('hide-panel')) {
		jQuery('.colors-switcher').css({'right': '-100px'});
		jQuery('#show-panel').removeClass('hide-panel');
		jQuery('#show-panel').addClass('show-panel');
	}
});

});

function setActiveStyleSheet(title) {
var i, a, main;
for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
	if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
		a.disabled = true;
		if(a.getAttribute("title") == title) a.disabled = false;
	}
}
}

function getActiveStyleSheet() {
var i, a;
for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
	if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
}
return null;
}

function getPreferredStyleSheet() {
var i, a;
for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
	if(a.getAttribute("rel").indexOf("style") != -1
		 && a.getAttribute("rel").indexOf("alt") == -1
		 && a.getAttribute("title")
		 ) return a.getAttribute("title");
}
return null;
}

function createCookie(name,value,days) {
if (days) {
	var date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
}
else expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
	var c = ca[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}

window.onload = function(e) {
var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);
}

window.onunload = function(e) {
var title = getActiveStyleSheet();
createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);
													