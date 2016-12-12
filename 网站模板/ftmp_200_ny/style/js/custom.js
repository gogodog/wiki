/***************************************************
		FORM VALIDATION JAVASCRIPT
***************************************************/

$(document).ready(function() {
	$('form#contact_form').submit(function() {
		$('form#contact_form .error').remove();
		var hasError = false;
		$('.requiredField').each(function() {
			if(jQuery.trim($(this).val()) == '') {
            	var labelText = $(this).prev('label').text();
            	$(this).parent().append('<span class="error">Please enter your '+labelText+'</span>');
            	$(this).addClass('inputError');
            	hasError = true;
            } else if($(this).hasClass('email')) {
            	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            	if(!emailReg.test(jQuery.trim($(this).val()))) {
            		var labelText = $(this).prev('label').text();
            		$(this).parent().append('<span class="error">Please a valid '+labelText+'</span>');
            		$(this).addClass('inputError');
            		hasError = true;
            	}
            }
		});
		if(!hasError) {
			$('form#contact_form input.submit').fadeOut('normal', function() {
				$(this).parent().append('');
			});
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				$('form#contact_form').slideUp("fast", function() {
					$(this).before('<p class="success">Thank you!<br/>Your email was sent successfully.<br/>I will contact you as soon as possible.</p>');
				});
			});
		}

		return false;

	});
				
				
});


/***************************************************
		EASING
***************************************************/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ¬© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/***************************************************
		PORTFOLIO PAGINATION
***************************************************/

/* 	Easy Paginate 1.0 - jQuery plugin written by Alen Grakalic http://cssglobe.com/
 *	Copyright (c) 2011 Alen Grakalic (http://cssglobe.com) Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
*/
(function($){$.fn.easyPaginate=function(_1){var _2={step:4,delay:100,numeric:true,nextprev:true,controls:"pagination",current:"current"};var _1=$.extend(_2,_1);var _3=_1.step;var _4,_5;var _6=$(this).children();var _7=_6.length;var _8,_9,_a;var _b=1;function _c(){_4=((_b-1)*_3);_5=_4+_3;$(_6).each(function(i){var _d=$(this);_d.hide();if(i>=_4&&i<_5){setTimeout(function(){_d.fadeIn("fast");},(i-(Math.floor(i/_3)*_3))*_1.delay);}if(_1.nextprev){if(_5>=_7){_9.fadeOut("fast");}else{_9.fadeIn("fast");}if(_4>=1){_a.fadeIn("fast");}else{_a.fadeOut("fast");}}});$("li","#"+_1.controls).removeClass(_1.current);$("li[data-index=\""+_b+"\"]","#"+_1.controls).addClass(_1.current);};this.each(function(){_8=this;if(_7>_3){var _e=Math.floor(_7/_3);if((_7/_3)>_e){_e++;}var ol=$("<ol id=\""+_1.controls+"\"></ol>").insertAfter(_8);if(_1.nextprev){_a=$("<li class=\"prev\">Previous</li>").hide().appendTo(ol).click(function(){_b--;_c();});}if(_1.numeric){for(var i=1;i<=_e;i++){$("<li data-index=\""+i+"\">"+i+"</li>").appendTo(ol).click(function(){_b=$(this).attr("data-index");_c();});}}if(_1.nextprev){_9=$("<li class=\"next\">Next</li>").hide().appendTo(ol).click(function(){_b++;_c();});}_c();}});};})(jQuery);


/***************************************************
		ENLARGED IMAGES
***************************************************/

/**
* Name: PiroBox Extended v.1.2.3
* Date: October 2011
* Autor: Diego Valobra (http://www.pirolab.it),(http://www.diegovalobra.com)
* Version: 1.2.3
* Licence: CC-BY-SA http://creativecommons.org/licenses/by-sa/3/it/
**/

(function($) {
	var flag_scroll = null;
	$.pirobox_ext = function(opt) {
		opt = jQuery.extend({
		piro_speed : 700,
		zoom_mode : true,
		move_mode : 'mousemove',
		bg_alpha : 0.5,
		piro_scroll : true,
		share: true,
		padding:null,
		image_ratio:0.90 //var image ratio = 1.203; /*::::: ORIGINAL SIZE :::::*/	
				}, opt);
		flag_scroll = opt.piro_scroll;
	$.fn.piroFadeIn = function(speed, callback) {
		$(this).fadeIn(speed, function() {
		if(jQuery.browser.msie)
			$(this).get(0).style.removeAttribute('filter');
		if(callback != undefined)
			callback();
		});
	};
	$.fn.piroFadeOut = function(speed, callback) {
		$(this).fadeOut(speed, function() {
		if(jQuery.browser.msie)
			$(this).get(0).style.removeAttribute('filter');
		if(callback != undefined)
			callback();
		});
	};
	var my_gall_obj = $('*[class*="pirobox"]');
	var map = new Object();
		for (var i=0; i<my_gall_obj.length; i++) {
			var it=$(my_gall_obj[i]);
			map['.'+ it.attr('class').match(/^pirobox_gall\w*/)]=0;
		}
	var gall_settings = new Array();
	for (var key in map) {
		gall_settings.push(key);
	}
	for (var i=0; i<gall_settings.length; i++) {
		$(gall_settings[i]+':first').attr('my_id','first');
		$(gall_settings[i]+':last').attr('my_id','last');
	}
	var piro_gallery = $(my_gall_obj);
	$('*[class*="pirobox_gall"]').each(function(rev){
		this.rev = rev+0});
	if($('*[class*="pirobox"]').length == 1){ 
	$('*[class*="pirobox"]').each(function(){
		$(this).addClass('single_fix');
		});
	}
	var	piro_capt_cont = '<div class="piro_caption"></div>';
	var struct =(
		'<div class="piro_overlay"></div>'+
		'<table class="piro_html"  cellpadding="0" cellspacing="0">'+
		'<tr>'+
		'<td class="h_t_l"></td>'+
		'<td class="h_t_c"></td>'+
		'<td class="h_t_r"></td>'+
		'</tr>'+
		'<tr>'+
		'<td class="h_c_l"></td>'+
		'<td class="h_c_c">'+
		'<div class="piro_loader" title="close"><span></span></div>'+
		'<div class="resize">'+
		'<div class="nav_big">'+
		'<a href="#next" class="piro_next" title="next"></a>'+
		'<a href="#prev" class="piro_prev" title="previous"></a>'+
		'</div>'+
		'<div class="div_reg"></div>'+
		'</div>'+
		'</td>'+
		'<td class="h_c_r"></td>'+
		'</tr>'+
		'<tr>'+
		'<td class="h_mb_l"></td>'+
		'<td class="h_mb_c">'+
		'<div class="nav_container">'+
		'<div class="nav_container_hide">'+
		'<a href="#next" class="piro_next" title="next"></a>'+
		'<div class="piro_next_fake"></div>'+
		'<div class="piro_close" title="close"></div>'+
		'<a href="#prev" class="piro_prev" title="previous"></a>'+
		'<div class="piro_prev_fake"></div>'+
		'<a href="" target="_blank" class="piro_twitter" title="share on twitter"></a>'+
		'<a href="" target="_blank" class="piro_facebook" title="share on facebook"></a>'+
		'<a href="#ZoomIn" class="piro_zoomIn" title="ZoomIn"></a>'+
		'<a href="#ZoomOut" class="piro_zoomOut" title="ZoomOut"></a>'+
		'</div>'+
		'</div>'+
		'</td>'+
		'<td class="h_mb_r"></td>'+
		'</tr>'+
		'<tr>'+
		'<td class="h_b_l"></td>'+
		'<td class="h_b_c"></td>'+
		'<td class="h_b_r"></td>'+
		'</tr>'+
		'</table>'
		);
	$('body').append(struct);
	var wrapper = $('.piro_html'),
		zoomIn = $('.piro_zoomIn'),
		zoomOut = $('.piro_zoomOut'),
		twitter = $('.piro_twitter'),
		facebook = $('.piro_facebook'),
		piro_next = $('.piro_next'),
		piro_prev = $('.piro_prev'),
		piro_next_big = $('.nav_big .piro_next'),
		piro_prev_big = $('.nav_big .piro_prev'),
		piro_next_fake = $('.piro_next_fake'),
		piro_prev_fake = $('.piro_prev_fake'),
		piro_close = $('.piro_close'),
		piro_bg = $('.piro_overlay'),
		piro_nav = $('.nav_container'),
		piro_nav_in = $('.nav_container_hide'),
		div_reg = $('.div_reg'),
		piro_loader = $('.piro_loader'),
		resize = $('.resize'),
		y = $(window).height(),
		x = $(window).width(),
		rz_img = opt.image_ratio, 
		position = -50;
		opt.padding = $('.piro_html .h_t_l').width();
		$('.piro_html .h_mb_c,.nav_container').animate({height:0},0)
	wrapper.css({left:  ((x/2)-(wrapper.width()/2))+ 'px',top: (y/2)-(wrapper.height()/2)});
	$(wrapper).add(piro_bg).hide();
	$('.nav_big').hide();
	
	piro_bg.css({'opacity':opt.bg_alpha});	
	$(piro_prev).add(piro_next).bind('click',function(c) {
		$('.piro_html .h_mb_c, .nav_container').animate({height:0},0);
		$('.nav_big').hide();
		$('.div_reg').children().fadeOut(200);
		zoomOut.css('visibility','hidden');
		$('.piro_caption').remove();
		c.preventDefault();
		var obj_count = parseInt($('*[class*="pirobox_gall"]').filter('.item').attr('rev'));
		var start = $(this).is('.piro_prev') ? $('*[class*="pirobox_gall"]').eq(obj_count - 1) : $('*[class*="pirobox_gall"]').eq(obj_count + 1);
		start.click();
	});
	$('html').bind('keyup', function (c) {
		 if(c.keyCode == 27) {
			c.preventDefault();
			if($(piro_close).is(':visible')){close_all();}
		}
	});
	$('html').bind('keyup' ,function(e) {
		 if ($('.item').attr('my_id')=='first'){
		}else if ($('.item').attr('media') == 'single'){
			piro_nav.show();
		}else if(e.keyCode == 37){
		e.preventDefault();
			if($(piro_close).is(':visible')){piro_prev_big.click();}
		 }
	});
	$('html').bind('keyup' ,function(z) {
		if ($('.item').attr('my_id')=='last'){
		}else if ($('.item').attr('media') == 'single'){
			piro_nav.show();
		}else if(z.keyCode == 39){
		z.preventDefault();
			if($(piro_close).is(':visible')){piro_next_big.click();}
		}
	});
	$(window).resize(function(){
		if(flag_scroll == false){
			var new_y = $(window).height(),
				new_x = $(window).width(),
				new_h = wrapper.height()-opt.padding*2,
				new_w = wrapper.width();
				wrapper.css({
					left:  ((new_x/2)-(new_w/2))+ 'px',
					top: ((new_y-new_h)/2)-opt.padding
				});	
		}else if (flag_scroll == true){
			var new_y = $(window).height(),
				new_x = $(window).width(),
				new_h = wrapper.height()-opt.padding*2,
				new_w = wrapper.width();
			wrapper.css({
				left:  ((new_x/2)-((new_w)/2)+opt.padding/2),
				top: parseInt($(document).scrollTop())+(new_y-new_h)/2 + (position/2)
			});		
		}	
			$('.piro_caption').remove();  
			
		});	
		$(window).scroll(function(){
			if(flag_scroll == false){
			return;
			}else if (flag_scroll == true){
			var new_y = $(window).height(),
				new_x = $(window).width(),
				new_h = wrapper.outerHeight(true),
				new_w = wrapper.outerWidth(true);
			wrapper.css({
				//left:  ((x/2)-((imgW+40)/2)),
				left:  ((new_x/2)-((new_w)/2)+opt.padding/2),
				top: parseInt($(document).scrollTop())+(new_y-new_h)/2 + (position/2)
			});		
			}
		});
	$(piro_gallery).each(function(){
	  function nav_position(){
		piro_nav_in.each(function(){
				var nav_children = $(this).children(':visible').not('.piro_caption');
				var nav_children_not = $(this).children().not('.piro_caption').not(':visible');
				var increase = 0;
				$(nav_children).each(function(){
					increase += $(this).width()+6;
					$(this).css({'visibility':'visible'});
					$(this).css({'right':increase,'margin-right':'-20px'});
					zoomIn.css('margin-right','-30px');
					var zoom_pos = zoomIn.position();
					zoomOut.css({'right':increase,'visibility':'hidden','margin-right':'-30px'});
					$(nav_children_not).css('visibility','hidden');
					});
				});
	  		}
				
		var descr = $(this).attr('title'),
			params = $(this).attr('media').split('-'),
			p_link = $(this).attr('href');
		$(this).unbind(); 
		$(this).bind('click', function(e) {
			//zoomIn.add(zoomOut).hide();
			piro_bg.css({'opacity':opt.bg_alpha});	
			e.preventDefault();
			piro_next.add(piro_prev).hide();
			piro_next_fake.add(piro_prev_fake).hide();
			$(piro_gallery).filter('.item').removeClass('item');
			$(this).addClass('item');
			open_all();
				if(opt.share == true){
					twitter.add(facebook).show();
				}
				if($(this).attr('my_id')=='first'){
					piro_prev.add(piro_next_fake).hide();
					piro_next.add(piro_prev_fake).show();
				}else{
					piro_next.add(piro_prev).show();
					piro_next_fake.add(piro_prev_fake).hide();
				}
				
				if($(this).attr('my_id')=='last'){
					piro_prev.add(piro_next_fake).show();
					piro_next.add(piro_prev_fake).hide();	
				}
				if($(this).is('.pirobox') || $(this).is('.single_fix')){
					piro_next.add(piro_prev).hide();
					$('.nav_big,.nav_big .piro_next,.nav_big .piro_prev').css('height',0).hide();
					piro_next_fake.add(piro_prev_fake).hide();
				}
				if($(this).attr('my_id')=='last' && $(this).attr('my_id')=='first'){
					piro_next.add(piro_prev).hide();
					piro_next_fake.add(piro_prev_fake).hide();
					$('.nav_big .piro_next,.nav_big .piro_prev').css('height',0).hide();
		  	}	
		});
		function open_all(){
			$.fn.hasAttr = function(name) {  
			   return this.attr(name) !== undefined;
			};
			wrapper.add(piro_bg).add(div_reg).add(piro_loader).show();
			function animate_html(){
				piro_nav_in.add('.piro_caption').hide();
				$('.piro_zoomOut,.piro_zoomIn').css('visibility','hidden').hide();
				$('.nav_big .piro_next,.nav_big .piro_prev').css('height',0);
				  if(descr == "" || descr === undefined || descr === false ){
					  $('.piro_caption').hide();
				  }else{
					 $(piro_capt_cont).appendTo(piro_nav_in); 
				  }
				if(params[1] == 'full' && params[2] == 'full'){
				params[2] = $(window).height()-opt.padding*4;	
				params[1] = $(window).width()-opt.padding*3;
				}
				if(params[0] == 'inline'){
				params[2] = $(p_link).outerHeight();	
				params[1] = $(p_link).outerWidth();
				}
				var y = $(window).height();
				var x = $(window).width();
				if(parseFloat(params[2])+70>y){
					var top = 0;
					flag_scroll = false;
					}else if(params[1] == 'full'){
					flag_scroll = opt.piro_scroll;
					var top =  (parseInt($(document).scrollTop())+(y-params[2])/2+ position);
					}else{
					var top =  (parseInt($(document).scrollTop())+(y-params[2])/2+ position);
					flag_scroll = opt.piro_scroll;
					}
				piro_close.hide();
				resize.animate({
					'height':+ (params[2]),
					'width':+ (params [1])
					},opt.piro_speed).css({'visibility':'visible'});
				div_reg.animate({
					'height':+ (params[2]),
					'width':+ (params [1])
					},opt.piro_speed).css({'visibility':'visible'});
				wrapper.animate({
					height:+ (params[2])+(opt.padding*2),
					width:+ (params[1]) +(opt.padding*2),
					left:  ((x/2)-((params[1])/2+opt.padding)),
					top: top
					},opt.piro_speed ,function(){
						$('.nav_big').hide();
						$('.piro_caption').html('<p>'+descr+'</p>').hide();
						$('.piro_html .h_mb_c,.nav_container').animate({height:46},300);
						piro_nav_in.show();
						piro_loader.hide();
						piro_close.show();
						$('.piro_caption').fadeIn(100,function(){
						if($('.piro_caption p').height()> 28){
							$('.piro_caption p').css({'background':'url(css_pirobox/style_12/caption_up_down.png) top right no-repeat','padding-right':'18px'});
							var piro_nav_length = piro_nav_in.children(':visible').not('.piro_caption').length;
								$('.piro_caption').css('width',params[1]-(45*piro_nav_length));	
							
							$('.piro_caption').live('mouseenter',function(){
							$(this).stop().animate({'height':$(this).children('p').outerHeight(true)},400);
							});
							$('.piro_caption').live('mouseleave',function(){
								$(this).animate({'height':28},200);
							});										
						}else{
							$('.piro_caption p,.piro_caption').removeAttr('style')
						}
						})
					nav_position();
				});
			}
			function animate_image (){
				flag_scroll = opt.piro_scroll;
				piro_nav_in.hide();
				$('.nav_big .piro_next,.nav_big .piro_prev').css('height',0);
					if(descr == "" || descr === undefined || descr === false ){
						$('.piro_caption').hide();
					}else{
						$(piro_capt_cont).appendTo(piro_nav_in);
					}
						var img = new Image();
						img.onerror = function (){
							$('.piro_caption').remove();
							twitter.add(facebook).hide();
							img.src = "js/error.jpg";
							img.width = '368';
							img.height = '129';
						};
						img.onload = function() {
							var this_h = img.height;
							var this_w = img.width;
							var y = $(window).height();
							var x = $(window).width();
							var	imgH = img.height;
							var	imgW = img.width;
							if(imgH+100 > y || imgW+100 > x){
								var _x = (imgW + opt.padding*2)/x;
								var _y = (imgH + opt.padding*2)/y;
								if ( _y > _x ){
									imgW = Math.round(img.width* (rz_img/_y));
									imgH = Math.round(img.height* (rz_img/_y));
								}else{
									imgW = Math.round(img.width * (rz_img/_x));
									imgH = Math.round(img.height * (rz_img/_x));
								}
								if(opt.zoom_mode == true){
								$('.piro_zoomIn').css('visibility','visible').show();
								$('.piro_zoomOut').css('visibility','hidden').hide();
								}
							}else{
								imgH = img.height;
								imgW = img.width;
								$('.piro_zoomOut,.piro_zoomIn').css('visibility','hidden').hide();
								}
							var y = $(window).height();
							var x = $(window).width();
							$(img).height(imgH).width(imgW);
							$(img).addClass('immagine');
							resize.animate({height:imgH,width:imgW},opt.piro_speed);
							div_reg.animate({height:imgH,width:imgW},opt.piro_speed);
							wrapper.animate({
								height : (imgH+opt.padding*2),
								width : (imgW+opt.padding*2), 
								left:  ((x/2)-((imgW+opt.padding)/2)),
								top: parseInt($(document).scrollTop())+(y-imgH)/2 + position
								},opt.piro_speed, function(){
									facebook.attr('href','http://www.facebook.com/sharer.php?u='+img.src)
									twitter.attr('href','http://twitter.com/share?url='+img.src)
									piro_loader.hide();		
									var cap_w = resize.width();
									$('.nav_big,.nav_container').show();
									$('.piro_caption').html('<p>'+descr+'</p>').hide();
									$('.nav_big,.nav_big .piro_next,.nav_big .piro_prev').css({'height':imgH});
									$('.nav_big').css({'width':imgW});
									$('.div_reg img').remove();
									div_reg.html('').append(img).hide();
									$(div_reg).fadeIn(300,function(){
										$('.piro_html .h_mb_c,.nav_container').animate({height:46},300);
										piro_nav_in.show();					
									$(window).scroll(function(){
										if($('.piro_zoomOut').is(':visible')){
											div_reg.unbind('mousemove');
											$(img).animate({'width':  imgW , 'height': imgH, top:0, left:0 },600,function(){
												$('.immagine').css('cursor', 'auto');
												$(img).draggable({disabled:true});
												zoomOut.css('visibility','hidden');
												zoomIn.css('visibility','visible');
											});										
										}
										});
									$('.immagine').add(zoomOut).bind('click',function(h){
										h.preventDefault();
										$('.nav_big').show();
											div_reg.unbind('mousemove');
											$(img).draggable({disabled:true});
											zoomOut.css('visibility','hidden');
											$('.immagine').css({'cursor':'auto','visibility':'visible'});
											zoomIn.css({'visibility':'visible'/*,'left':position2.left*/});
											$(img).animate({'width':  imgW , 'height': imgH, top:0, left:0 },600)
										});
									zoomIn.bind('click',function(w){
										w.preventDefault();
										$(this).css('visibility','hidden');
										zoomOut.css({'visibility':'visible'/*,'left':position.left*/}).show();
										$(img).draggable({disabled:false});
										$(img).animate({'width':  this_w , 'height': this_h , top:-(this_h-imgH)/2, left:-(this_w-imgW)/2 },600,function(){
											if(opt.move_mode == 'drag'){
												$('.nav_big').hide();
												var imgPos = div_reg.offset(),
													x1 = (imgPos.left + imgW) - this_w,
													y1 = (imgPos.top + imgH) - this_h,
													x2 = imgPos.left,
													y2 = imgPos.top;
												$(img).draggable({containment: [x1,y1,x2,y2],scrollSpeed: 400});
												$('.immagine').css('cursor', 'move');
										 	}else if(opt.move_mode == 'mousemove'){
												$(img).draggable({disabled:true});
												$('.immagine').css('cursor', 'crosshair');
												$('.nav_big').hide();
												var	div_reg_w = div_reg.width(),
													div_reg_h = div_reg.height(),
													perc_x= (this_w-div_reg_w)/div_reg_w,
													perc_y=(this_h-div_reg_h)/div_reg_h,
													last_x= 0,
													last_y= 0;
													div_reg.bind('mousemove',function(e){
														var pos_x = e.pageX-div_reg.offset().left; 
														var pos_y = e.pageY-div_reg.offset().top;
														if (Math.abs(last_x-pos_x)<=1 && Math.abs(last_y-pos_y)<=1) return;
														last_x = pos_x;
														last_y = pos_y;
														$(img).animate({ left : -(perc_x*pos_x),top:-(perc_y*pos_y)},300);
													});
												}
										  });
									 });
									piro_close.show();
									$('.piro_caption').show(0,function(){
									if($('.piro_caption p').height()> 28){
										$('.piro_caption p').css({'background':'url(css_pirobox/style_10/caption_up_down.png) top right no-repeat','padding-right':'18px'});
										var piro_nav_length = piro_nav_in.children(':visible').not('.piro_caption').length;
										$('.piro_caption').css('width',imgW-(43*piro_nav_length));	
										$('.piro_caption').live('mouseenter',function(){
										$(this).stop().animate({'height':$(this).children('p').outerHeight(true)},400);
										});
										$('.piro_caption').live('mouseleave',function(){
											$(this).animate({'height':28},200);
										});										
									}else{
										$('.piro_caption p,.piro_caption').removeAttr('style')
									}
									$(this).fadeTo(200,1)
									});
									nav_position();
								});	
							});	
							
						};
						img.src = p_link;
						piro_loader.click(function(){
						close_all();
					});
				
				}

			switch (params[0]) {
				case 'iframe':
					div_reg.html('').css('overflow','hidden');
					resize.css('overflow','hidden');
					animate_html();
					div_reg.piroFadeIn(300,function(){
						div_reg.append(
						'<iframe id="my_frame" class="my_frame" src="'+p_link+'" frameborder="0" allowtransparency="true" scrolling="auto" align="top"></iframe>'
						);
						$('.my_frame').css({'height':+ (params[2]) +'px','width':+ (params [1])+'px'});
						twitter.add(facebook).hide().css('visibility','hidden');
					});
				break;
				case 'content':
					div_reg.html('').css('overflow','auto');
					resize.css('overflow','auto');
					$('.my_frame').remove();
					animate_html();
					div_reg.piroFadeIn(300,function(){
						div_reg.load(p_link);
						twitter.add(facebook).hide().css('visibility','hidden');;
					});
				break;
				case 'inline':
					div_reg.html('').css('overflow','auto');
					resize.css('overflow','auto');
					$('.my_frame').remove();
					animate_html();
					div_reg.piroFadeIn(300,function(){
						$(p_link).clone(true).appendTo(div_reg).addClass('clone');
						$('.clone').css('margin-top','0').piroFadeIn(300);
						twitter.add(facebook).hide().css('visibility','hidden');
					});
				break;
				case 'flash':
				$('.my_frame').remove();
				div_reg.html('').css('overflow','hidden');
				animate_html();
					var flash_cont =(
					'<object  width="'+params[1]+'" height="'+params[2]+'">'+
					'<param name="movie" value="'+ p_link +'" />'+
					'<param name="wmode" value="transparent" />'+
					'<param name="allowFullScreen" value="true" />'+
					'<param name="allowscriptaccess" value="always" />'+
					'<param name="menu" value="false" />'+
					'<embed src="'+ p_link +'" type="application/x-shockwave-flash" allowscriptaccess="always" menu="false" wmode="transparent" allowfullscreen="true" width="'+params[1]+'" height="'+params[2]+'">'+
					'</embed>'+
					'</object>');
					div_reg.piroFadeIn(300,function(){
					$(flash_cont).appendTo(div_reg);
					twitter.add(facebook).hide().css('visibility','hidden');
					});
				break;
				case 'gallery':
					div_reg.css('overflow','hidden');
					resize.css('overflow','hidden');
					$('.my_frame').remove();
					animate_image();
				break;
				case 'single':
					$('.my_frame').remove();
					div_reg.html('').css('overflow','hidden');
					resize.css('overflow','hidden');
					animate_image();
				break;
			} 	
		}
	});
	
	function close_all (){
		if($('.piro_close').is(':visible')){}
				$('.my_frame').add('.piro_caption').remove();
				wrapper.add(div_reg).add(resize).stop();
				var ie_sucks = wrapper;
				if ( $.browser.msie ) {
					ie_sucks = div_reg.add(piro_bg);
					$('.div_reg img').remove();
				}else{
					ie_sucks = wrapper.add(piro_bg);
				}
				ie_sucks.piroFadeOut(200,function(){
					div_reg.html('');
					piro_loader.hide();
					piro_nav_in.hide();
					$('.piro_html .h_mb_c,.nav_container').animate({height:0},0);
					piro_bg.add(wrapper).hide().css('visibility','visible');
					
				});
			
		}
		piro_close.add(piro_loader).add(piro_bg).bind('click',function(y){y.preventDefault(); close_all();});	
	}
	
	
})
(jQuery);

$(function(){
$.pirobox_ext({
        piro_speed : 700,
        zoom_mode : false,
        move_mode : 'mousemove',
         bg_alpha : 0.5,
         piro_scroll : true,
         share: true
                });
			});
     

/***************************************************
		TIMERS FOR GALLERY VIEW
***************************************************/

/**
 * jQuery.timers - Timer abstractions for jQuery
 * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
 * Date: 2009/10/16
 *
 * @author Blair Mitchelmore
 * @version 1.2
 *
 **/

jQuery.fn.extend({
	everyTime: function(interval, label, fn, times) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, times);
		});
	},
	oneTime: function(interval, label, fn) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, 1);
		});
	},
	stopTime: function(label, fn) {
		return this.each(function() {
			jQuery.timer.remove(this, label, fn);
		});
	}
});

jQuery.extend({
	timer: {
		global: [],
		guid: 1,
		dataKey: "jQuery.timer",
		regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
		powers: {
			// Yeah this is major overkill...
			'ms': 1,
			'cs': 10,
			'ds': 100,
			's': 1000,
			'das': 10000,
			'hs': 100000,
			'ks': 1000000
		},
		timeParse: function(value) {
			if (value == undefined || value == null)
				return null;
			var result = this.regex.exec(jQuery.trim(value.toString()));
			if (result[2]) {
				var num = parseFloat(result[1]);
				var mult = this.powers[result[2]] || 1;
				return num * mult;
			} else {
				return value;
			}
		},
		add: function(element, interval, label, fn, times) {
			var counter = 0;
			
			if (jQuery.isFunction(label)) {
				if (!times) 
					times = fn;
				fn = label;
				label = interval;
			}
			
			interval = jQuery.timer.timeParse(interval);

			if (typeof interval != 'number' || isNaN(interval) || interval < 0)
				return;

			if (typeof times != 'number' || isNaN(times) || times < 0) 
				times = 0;
			
			times = times || 0;
			
			var timers = jQuery.data(element, this.dataKey) || jQuery.data(element, this.dataKey, {});
			
			if (!timers[label])
				timers[label] = {};
			
			fn.timerID = fn.timerID || this.guid++;
			
			var handler = function() {
				if ((++counter > times && times !== 0) || fn.call(element, counter) === false)
					jQuery.timer.remove(element, label, fn);
			};
			
			handler.timerID = fn.timerID;
			
			if (!timers[label][fn.timerID])
				timers[label][fn.timerID] = window.setInterval(handler,interval);
			
			this.global.push( element );
			
		},
		remove: function(element, label, fn) {
			var timers = jQuery.data(element, this.dataKey), ret;
			
			if ( timers ) {
				
				if (!label) {
					for ( label in timers )
						this.remove(element, label, fn);
				} else if ( timers[label] ) {
					if ( fn ) {
						if ( fn.timerID ) {
							window.clearInterval(timers[label][fn.timerID]);
							delete timers[label][fn.timerID];
						}
					} else {
						for ( var fn in timers[label] ) {
							window.clearInterval(timers[label][fn]);
							delete timers[label][fn];
						}
					}
					
					for ( ret in timers[label] ) break;
					if ( !ret ) {
						ret = null;
						delete timers[label];
					}
				}
				
				for ( ret in timers ) break;
				if ( !ret ) 
					jQuery.removeData(element, this.dataKey);
			}
		}
	}
});

jQuery(window).bind("unload", function() {
	jQuery.each(jQuery.timer.global, function(index, item) {
		jQuery.timer.remove(item);
	});
});

/***************************************************
		FAQ - ACCORDIAN
***************************************************/

$(document).ready(function() {
	$('.accordionButton').click(function() {
		$('.accordionButton').removeClass('on');
		$('.accordionContent').slideUp('normal');
   if($(this).next().is(':hidden') == true) {
			$(this).addClass('on');
			$(this).next().slideDown('normal');
		 } 
	 });
	$('.accordionButton').mouseover(function() {
		$(this).addClass('over');
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	$('.accordionContent').hide();

});
	
/***************************************************
		TWEETABLE
***************************************************/

/*
 * tweetable 1.6 - jQuery twitter feed generator plugin
 * Copyright (c) 2009 Philip Beel (http://www.theodin.co.uk/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * With modifications from Philipp Robbel (http://www.robbel.com/) and Patrick DW (stackoverflow)
 * for IE compatibility.
 * Revision: $Id: jquery.tweetable.js 2011-01-06 $ 
 */
(function(a){a.fn.tweetable=function(b){var c={limit:5,username:"jo_phillips",time:false,replies:false,position:"append"};var b=a.extend(c,b);return this.each(function(e){var d=a(this);var j;var i="";var f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var g="http://api.twitter.com/1/statuses/user_timeline.json?screen_name=";var h="&count=";a.getJSON(g+c.username+h+c.limit+"&callback=?",d,function(k){a.each(k,function(m,n){if(m==0){j=a('<ul class="tweetList">')[c.position.toLowerCase()+"To"](d)}if(c.replies===false){if(n.in_reply_to_status_id===null){j.append('<li class="tweet_content_'+m+'"><p class="tweet_link_'+m+'">'+n.text.replace(/#(.*?)(\s|$)/g,'<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,'<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g,'<a href="http://twitter.com/$1">@$1 </a>$2')+"</p></li>")}}else{j.append('<li class="tweet_content_'+m+'"><p class="tweet_link_'+m+'">'+n.text.replace(/#(.*?)(\s|$)/g,'<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,'<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g,'<a href="http://twitter.com/$1">@$1 </a>$2')+"</p></li>")}if(c.time==true){for(var l=0;l<=12;l++){if(f[l]==n.created_at.substr(4,3)){i=l+1;if(i<10){i="0"+i}}}a(".tweet_link_"+m).append("<small> "+n.created_at.substr(8,2)+"/"+i+"/"+n.created_at.substr(26,4)+" "+n.created_at.substr(11,8)+"</small>")}})})})}})(jQuery);

	
/***************************************************
		NEWS TICKER
***************************************************/

/*!
 * liScroll 1.0
 * Examples and documentation at: 
 * http://www.gcmingati.net/wordpress/wp-content/lab/jquery/newsticker/jq-liscroll/scrollanimate.html
 * 2007-2010 Gian Carlo Mingati
 * Version: 1.0.2 (30-MARCH-2009)
 * Dual licensed under the MIT and GPL licenses:  http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html Requires: jQuery v1.2.x or later
*/
jQuery.fn.liScroll = function(settings) {
		settings = jQuery.extend({
		travelocity: 0.05
		}, settings);		
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker")
				var stripWidth = 0;
				var $mask = $strip.wrap("<div class='mask'></div>");
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
				var containerWidth = $strip.parent().parent().width();	//a.k.a. 'mask' width 	
				$strip.find("li").each(function(i){
				stripWidth += jQuery(this, i).outerWidth(true); // thanks to Michael Haszprunar
				});
				$strip.width(stripWidth);			
				var totalTravel = stripWidth+containerWidth;
				var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
				function scrollnews(spazio, tempo){
				$strip.animate({left: '-='+ spazio}, tempo, "linear", function(){$strip.css("left", containerWidth); scrollnews(totalTravel, defTiming);});
				}
				scrollnews(totalTravel, defTiming);				
				$strip.hover(function(){
				jQuery(this).stop();
				},
				function(){
				var offset = jQuery(this).offset();
				var residualSpace = offset.left + stripWidth;
				var residualTime = residualSpace/settings.travelocity;
				scrollnews(residualSpace, residualTime);
				});			
		});	
};

/***************************************************
		TOOLTIPS
***************************************************/
/*
 * TipTip - Copyright 2010 Drew Wilson -  www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 * Version 1.3   -   Updated: Mar. 23, 2010
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);

$(function(){
        $(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 5, defaultPosition: "top" });
        });


/***************************************************
		TABS & ACCORDIAN
***************************************************/
/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * 
 * tabs/tabs.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialEffect:!1,initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(!c){var f=this.getPanes().eq(b),g=this.getCurrentPane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}});function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(d,i){var k=h.eq(d),l=!c.data("tabs");typeof d=="string"&&d.replace("#","")&&(k=h.filter("[href*=\""+d.replace("#","")+"\"]"),d=Math.max(h.index(k),0));if(e.rotate){var m=h.length-1;if(d<0)return f.click(m,i);if(d>m)return f.click(0,i)}if(!k.length){if(j>=0)return f;d=e.initialIndex,k=h.eq(d)}if(d===j)return f;i=i||a.Event(),i.type="onBeforeClick",g.trigger(i,[d]);if(!i.isDefaultPrevented()){var n=l?e.initialEffect&&e.effect||"default":e.effect;b[n].call(f,d,function(){j=d,i.type="onClick",g.trigger(i,[d])}),h.removeClass(e.current),k.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){h.off(e.event).removeClass(e.current),i.find("a[href^=\"#\"]").off("click.T");return f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).on(e.event,function(a){f.click(b,a);return a.preventDefault()})}),i.find("a[href^=\"#\"]").on("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href=\""+location.hash+"\"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.fn.tabs=function(b,c){var d=this.data("tabs");d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)});return c.api?d:this}})(jQuery);


/***************************************************
		PORTFOLIO FILTERABLE
***************************************************/
/*
* Copyright (C) 2009 Joel Sutherland.
* Liscenced under the MIT liscense
*/
(function($) {
	$.fn.filterable = function(settings) {
		settings = $.extend({
			useHash: true,
			animationSpeed: 1000,
			show: { width: 'show', opacity: 'show' },
			hide: { width: 'hide', opacity: 'hide' },
			useTags: true,
			tagSelector: '#portfolio-filter a',
			selectedTagClass: 'current',
			allTag: 'all'
		}, settings);
		
		return $(this).each(function(){
		
			/* FILTER: select a tag and filter */
			$(this).bind("filter", function( e, tagToShow ){
				if(settings.useTags){
					$(settings.tagSelector).removeClass(settings.selectedTagClass);
					$(settings.tagSelector + '[href=' + tagToShow + ']').addClass(settings.selectedTagClass);
				}
				$(this).trigger("filterportfolio", [ tagToShow.substr(1) ]);
			});
		
			/* FILTERPORTFOLIO: pass in a class to show, all others will be hidden */
			$(this).bind("filterportfolio", function( e, classToShow ){
				if(classToShow == settings.allTag){
					$(this).trigger("show");
				}else{
					$(this).trigger("show", [ '.' + classToShow ] );
					$(this).trigger("hide", [ ':not(.' + classToShow + ')' ] );
				}
				if(settings.useHash){
					location.hash = '#' + classToShow;
				}
			});
			
			/* SHOW: show a single class*/
			$(this).bind("show", function( e, selectorToShow ){
				$(this).children(selectorToShow).animate(settings.show, settings.animationSpeed);
			});
			
			/* SHOW: hide a single class*/
			$(this).bind("hide", function( e, selectorToHide ){
				$(this).children(selectorToHide).animate(settings.hide, settings.animationSpeed);	
			});
			
			/* ============ Check URL Hash ====================*/
			if(settings.useHash){
				if(location.hash != '')
					$(this).trigger("filter", [ location.hash ]);
				else
					$(this).trigger("filter", [ '#' + settings.allTag ]);
			}
			
			/* ============ Setup Tags ====================*/
			if(settings.useTags){
				$(settings.tagSelector).click(function(){
					$('#portfolio ul').trigger("filter", [ $(this).attr('href') ]);					
					$(settings.tagSelector).removeClass('current');
					$(this).addClass('current');
				});
			}
		});
	}
})(jQuery);

$(document).ready(function(){	
	$('#portfolio ul').filterable();
});

/***************************************************
		QUOVOLVER
***************************************************/
/*
 * jQuery Quovolver v1.0 - http://sandbox.sebnitu.com/jquery/quovolver
 * By Sebastian Nitu - Copyright 2009 - All rights reserved
 */

(function($) {
	$.fn.quovolver = function(speed, delay) {
		
		/* Sets default values */
		if (!speed) speed = 500;
		if (!delay) delay = 6000;
		
		// If "delay" is less than 4 times the "speed", it will break the effect 
		// If that's the case, make "delay" exactly 4 times "speed"
		var quaSpd = (speed*4);
		if (quaSpd > (delay)) delay = quaSpd;
		
		// Create the variables needed
		var	quote = $(this),
			firstQuo = $(this).filter(':first'),
			lastQuo = $(this).filter(':last'),
			wrapElem = '<div id="quote_wrap"></div>';
		
		// Wrap the quotes
		$(this).wrapAll(wrapElem);
		
		// Hide all the quotes, then show the first
		$(this).hide();
		$(firstQuo).show();
		
		// Set the hight of the wrapper
		$(this).parent().css({height: $(firstQuo).height()});		
		
		// Where the magic happens
		setInterval(function(){
			
			// Set required hight and element in variables for animation
			if($(lastQuo).is(':visible')) {
				var nextElem = $(firstQuo);
				var wrapHeight = $(nextElem).height();
			} else {
				var nextElem = $(quote).filter(':visible').next();
				var wrapHeight = $(nextElem).height();
			}
			
			// Fadeout the quote that is currently visible
			$(quote).filter(':visible').fadeOut(speed);
			
			// Set the wrapper to the hight of the next element, then fade that element in
			setTimeout(function() {
				$(quote).parent().animate({height: wrapHeight}, speed);
			}, speed);
			
			if($(lastQuo).is(':visible')) {
				setTimeout(function() {
					$(firstQuo).fadeIn(speed*2);
				}, speed*2);
				
			} else {
				setTimeout(function() {
					$(nextElem).fadeIn(speed);
				}, speed*2);
			}
			
		}, delay);
	
	};
})(jQuery);

 $(document).ready(function() {
$('blockquote').quovolver();
 });
/**
 * jQuery bxSlider v3.0
 * http://bxslider.com
 *
 * Copyright 2010, Steven Wanderski
 * http://bxcreative.com
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */
(function(a){a.fn.bxSlider=function(b){function Z(b,c,d,e){var f=[];var g=d;var h=false;if(e=="backward"){b=a.makeArray(b);b.reverse()}while(g>0){a.each(b,function(b,d){if(g>0){if(!h){if(b==c){h=true;f.push(a(this).clone());g--}}else{f.push(a(this).clone());g--}}else{return false}})}return f}function Y(){var a=i.outerHeight()*b.displaySlideQty;return a}function X(){var a=i.outerWidth()*b.displaySlideQty;return a}function W(b,c){if(c=="left"){var d=a(".pager",h).eq(b).position().left}else if(c=="top"){var d=a(".pager",h).eq(b).position().top}return d}function V(){if(!b.infiniteLoop&&b.hideControlOnEnd){if(x==F){a(".bx-prev",h).hide()}else{a(".bx-prev",h).show()}if(x==G){a(".bx-next",h).hide()}else{a(".bx-next",h).show()}}}function U(c,e,f,g){p=a('<a href="" class="bx-start"></a>');if(c=="text"){r=e}else{r='<img src="'+e+'" />'}if(f=="text"){s=g}else{s='<img src="'+g+'" />'}if(b.autoControlsSelector){a(b.autoControlsSelector).append(p)}else{h.append('<div class="bx-auto"></div>');a(".bx-auto",h).html(p)}p.click(function(){if(b.ticker){if(a(this).hasClass("stop")){d.stopTicker()}else if(a(this).hasClass("start")){d.startTicker()}}else{if(a(this).hasClass("stop")){d.stopShow(true)}else if(a(this).hasClass("start")){d.startShow(true)}}return false})}function T(){var c=a("img",g.eq(x)).attr("title");if(c!=""){if(b.captionsSelector){a(b.captionsSelector).html(c)}else{a(".bx-captions",h).html(c)}}else{if(b.captionsSelector){a(b.captionsSelector).html("¬Ý")}else{a(".bx-captions",h).html("¬Ý")}}}function S(c){var e=g.length;if(b.moveSlideQty>1){if(g.length%b.moveSlideQty!=0){e=Math.ceil(g.length/b.moveSlideQty)}else{e=g.length/b.moveSlideQty}}var f="";if(b.buildPager){for(var i=0;i<e;i++){f+=b.buildPager(i,g.eq(i*b.moveSlideQty))}}else if(c=="full"){for(var i=1;i<=e;i++){f+='<a href="" class="pager-link pager-'+i+'">'+i+"</a>"}}else if(c=="short"){f='<span class="bx-pager-current">'+(b.startingSlide+1)+"</span> "+b.pagerShortSeparator+' <span class="bx-pager-total">'+g.length+"</span>"}if(b.pagerSelector){a(b.pagerSelector).append(f);n=a(b.pagerSelector)}else{var j=a('<div class="bx-pager"></div>');j.append(f);if(b.pagerLocation=="top"){h.prepend(j)}else if(b.pagerLocation=="bottom"){h.append(j)}n=a(".bx-pager",h)}n.children().click(function(){if(b.pagerType=="full"){var a=n.children().index(this);if(b.moveSlideQty>1){a*=b.moveSlideQty}d.goToSlide(a)}return false})}function R(c,e,f,g){var i=a('<a href="" class="bx-next"></a>');var j=a('<a href="" class="bx-prev"></a>');if(c=="text"){i.html(e)}else{i.html('<img src="'+e+'" />')}if(f=="text"){j.html(g)}else{j.html('<img src="'+g+'" />')}if(b.prevSelector){a(b.prevSelector).append(j)}else{h.append(j)}if(b.nextSelector){a(b.nextSelector).append(i)}else{h.append(i)}i.click(function(){d.goToNextSlide();return false});j.click(function(){d.goToPreviousSlide();return false})}function Q(c){if(b.pagerType=="full"&&b.pager){a("a",n).removeClass(b.pagerActiveClass);a("a",n).eq(c).addClass(b.pagerActiveClass)}else if(b.pagerType=="short"&&b.pager){a(".bx-pager-current",n).html(x+1)}}function P(){g.not(":eq("+x+")").fadeTo(b.speed,0).css("zIndex",98);g.eq(x).css("zIndex",99).fadeTo(b.speed,1,function(){E=false;if(jQuery.browser.msie){g.eq(x).get(0).style.removeAttribute("filter")}b.onAfterSlide(x,g.length,g.eq(x))})}function O(){e.hover(function(){if(t){d.stopTicker(false)}},function(){if(t){d.startTicker(false)}})}function N(){h.find(".bx-window").hover(function(){if(t){d.stopShow(false)}},function(){if(t){d.startShow(false)}})}function M(){if(b.startImage!=""){startContent=b.startImage;startType="image"}else{startContent=b.startText;startType="text"}if(b.stopImage!=""){stopContent=b.stopImage;stopType="image"}else{stopContent=b.stopText;stopType="text"}U(startType,startContent,stopType,stopContent)}function L(a,c,d){if(b.mode=="horizontal"){if(b.tickerDirection=="next"){e.animate({left:"-="+c+"px"},d,"linear",function(){e.css("left",a);L(a,A,b.tickerSpeed)})}else if(b.tickerDirection=="prev"){e.animate({left:"+="+c+"px"},d,"linear",function(){e.css("left",a);L(a,A,b.tickerSpeed)})}}else if(b.mode=="vertical"){if(b.tickerDirection=="next"){e.animate({top:"-="+c+"px"},d,"linear",function(){e.css("top",a);L(a,B,b.tickerSpeed)})}else if(b.tickerDirection=="prev"){e.animate({top:"+="+c+"px"},d,"linear",function(){e.css("top",a);L(a,B,b.tickerSpeed)})}}}function K(){if(b.auto){if(!b.infiniteLoop){if(b.autoDirection=="next"){o=setInterval(function(){x+=b.moveSlideQty;if(x>G){x=x%g.length}d.goToSlide(x,false)},b.pause)}else if(b.autoDirection=="prev"){o=setInterval(function(){x-=b.moveSlideQty;if(x<0){negativeOffset=x%g.length;if(negativeOffset==0){x=0}else{x=g.length+negativeOffset}}d.goToSlide(x,false)},b.pause)}}else{if(b.autoDirection=="next"){o=setInterval(function(){d.goToNextSlide(false)},b.pause)}else if(b.autoDirection=="prev"){o=setInterval(function(){d.goToPreviousSlide(false)},b.pause)}}}else if(b.ticker){b.tickerSpeed*=10;a(".pager",h).each(function(b){A+=a(this).width();B+=a(this).height()});if(b.tickerDirection=="prev"&&b.mode=="horizontal"){e.css("left","-"+(A+y)+"px")}else if(b.tickerDirection=="prev"&&b.mode=="vertical"){e.css("top","-"+(B+z)+"px")}if(b.mode=="horizontal"){C=parseInt(e.css("left"));L(C,A,b.tickerSpeed)}else if(b.mode=="vertical"){D=parseInt(e.css("top"));L(D,B,b.tickerSpeed)}if(b.tickerHover){O()}}}function J(){if(b.nextImage!=""){nextContent=b.nextImage;nextType="image"}else{nextContent=b.nextText;nextType="text"}if(b.prevImage!=""){prevContent=b.prevImage;prevType="image"}else{prevContent=b.prevText;prevType="text"}R(nextType,nextContent,prevType,prevContent)}function I(){if(b.mode=="horizontal"||b.mode=="vertical"){var c=Z(g,0,b.moveSlideQty,"backward");a.each(c,function(b){e.prepend(a(this))});var d=g.length+b.moveSlideQty-1;var f=g.length-b.displaySlideQty;var h=d-f;var i=Z(g,0,h,"forward");if(b.infiniteLoop){a.each(i,function(b){e.append(a(this))})}}}function H(){I(b.startingSlide);if(b.mode=="horizontal"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+l+'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:'+l+'px;"></div>').css({width:"999999px",position:"relative",left:"-"+y+"px"});e.children().css({width:j,"float":"left",listStyle:"none"});h=e.parent().parent();g.addClass("pager")}else if(b.mode=="vertical"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+v+'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:'+v+"px; height:"+m+'px; position:relative; overflow:hidden;"></div>').css({height:"999999px",position:"relative",top:"-"+z+"px"});e.children().css({listStyle:"none",height:w});h=e.parent().parent();g.addClass("pager")}else if(b.mode=="fade"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+v+'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:'+w+"px; width:"+v+'px; position:relative; overflow:hidden;"></div>');e.children().css({listStyle:"none",position:"absolute",top:0,left:0,zIndex:98});h=e.parent().parent();g.not(":eq("+x+")").fadeTo(0,0);g.eq(x).css("zIndex",99)}if(b.captions&&b.captionsSelector==null){h.append('<div class="bx-captions"></div>')}}var c={mode:"horizontal",infiniteLoop:true,hideControlOnEnd:false,controls:true,speed:500,easing:"swing",pager:false,pagerSelector:null,pagerType:"full",pagerLocation:"bottom",pagerShortSeparator:"/",pagerActiveClass:"pager-active",nextText:"next",nextImage:"",nextSelector:null,prevText:"prev",prevImage:"",prevSelector:null,captions:false,captionsSelector:null,auto:false,autoDirection:"next",autoControls:false,autoControlsSelector:null,autoStart:true,autoHover:false,autoDelay:0,pause:3e3,startText:"start",startImage:"",stopText:"stop",stopImage:"",ticker:false,tickerSpeed:5e3,tickerDirection:"next",tickerHover:false,wrapperClass:"bx-wrapper",startingSlide:0,displaySlideQty:1,moveSlideQty:1,randomStart:false,onBeforeSlide:function(){},onAfterSlide:function(){},onLastSlide:function(){},onFirstSlide:function(){},onNextSlide:function(){},onPrevSlide:function(){},buildPager:null};var b=a.extend(c,b);var d=this;var e="";var f="";var g="";var h="";var i="";var j="";var k="";var l="";var m="";var n="";var o="";var p="";var q="";var r="";var s="";var t=true;var u=false;var v=0;var w=0;var x=0;var y=0;var z=0;var A=0;var B=0;var C=0;var D=0;var E=false;var F=0;var G=g.length-1;this.goToSlide=function(a,c){if(!E){E=true;x=a;b.onBeforeSlide(x,g.length,g.eq(x));if(typeof c=="undefined"){var c=true}if(c){if(b.auto){d.stopShow(true)}}slide=a;if(slide==F){b.onFirstSlide(x,g.length,g.eq(x))}if(slide==G){b.onLastSlide(x,g.length,g.eq(x))}if(b.mode=="horizontal"){e.animate({left:"-"+W(slide,"left")+"px"},b.speed,b.easing,function(){E=false;b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){e.animate({top:"-"+W(slide,"top")+"px"},b.speed,b.easing,function(){E=false;b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}V();if(b.moveSlideQty>1){a=Math.floor(a/b.moveSlideQty)}Q(a);T()}};this.goToNextSlide=function(a){if(typeof a=="undefined"){var a=true}if(a){if(b.auto){d.stopShow(true)}}if(!b.infiniteLoop){if(!E){var c=false;x=x+b.moveSlideQty;if(x<=G){V();b.onNextSlide(x,g.length,g.eq(x));d.goToSlide(x)}else{x-=b.moveSlideQty}}}else{if(!E){E=true;var c=false;x=x+b.moveSlideQty;if(x>G){x=x%g.length;c=true}b.onNextSlide(x,g.length,g.eq(x));b.onBeforeSlide(x,g.length,g.eq(x));if(b.mode=="horizontal"){var f=b.moveSlideQty*k;e.animate({left:"-="+f+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("left","-"+W(x,"left")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){var h=b.moveSlideQty*w;e.animate({top:"-="+h+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("top","-"+W(x,"top")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}T()}}};this.goToPreviousSlide=function(c){if(typeof c=="undefined"){var c=true}if(c){if(b.auto){d.stopShow(true)}}if(!b.infiniteLoop){if(!E){var f=false;x=x-b.moveSlideQty;if(x<0){x=0;if(b.hideControlOnEnd){a(".bx-prev",h).hide()}}V();b.onPrevSlide(x,g.length,g.eq(x));d.goToSlide(x)}}else{if(!E){E=true;var f=false;x=x-b.moveSlideQty;if(x<0){negativeOffset=x%g.length;if(negativeOffset==0){x=0}else{x=g.length+negativeOffset}f=true}b.onPrevSlide(x,g.length,g.eq(x));b.onBeforeSlide(x,g.length,g.eq(x));if(b.mode=="horizontal"){var i=b.moveSlideQty*k;e.animate({left:"+="+i+"px"},b.speed,b.easing,function(){E=false;if(f){e.css("left","-"+W(x,"left")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){var j=b.moveSlideQty*w;e.animate({top:"+="+j+"px"},b.speed,b.easing,function(){E=false;if(f){e.css("top","-"+W(x,"top")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}T()}}};this.goToFirstSlide=function(a){if(typeof a=="undefined"){var a=true}d.goToSlide(F,a)};this.goToLastSlide=function(){if(typeof a=="undefined"){var a=true}d.goToSlide(G,a)};this.getCurrentSlide=function(){return x};this.getSlideCount=function(){return g.length};this.stopShow=function(a){clearInterval(o);if(typeof a=="undefined"){var a=true}if(a&&b.autoControls){p.html(r).removeClass("stop").addClass("start");t=false}};this.startShow=function(a){if(typeof a=="undefined"){var a=true}K();if(a&&b.autoControls){p.html(s).removeClass("start").addClass("stop");t=true}};this.stopTicker=function(a){e.stop();if(typeof a=="undefined"){var a=true}if(a&&b.ticker){p.html(r).removeClass("stop").addClass("start");t=false}};this.startTicker=function(a){if(b.mode=="horizontal"){if(b.tickerDirection=="next"){var c=parseInt(e.css("left"));var d=A+c+g.eq(0).width()}else if(b.tickerDirection=="prev"){var c=-parseInt(e.css("left"));var d=c-g.eq(0).width()}var f=d*b.tickerSpeed/A;L(C,d,f)}else if(b.mode=="vertical"){if(b.tickerDirection=="next"){var h=parseInt(e.css("top"));var d=B+h+g.eq(0).height()}else if(b.tickerDirection=="prev"){var h=-parseInt(e.css("top"));var d=h-g.eq(0).height()}var f=d*b.tickerSpeed/B;L(D,d,f);if(typeof a=="undefined"){var a=true}if(a&&b.ticker){p.html(s).removeClass("start").addClass("stop");t=true}}};this.initShow=function(){e=a(this);f=e.clone();g=e.children();h="";i=e.children(":first");j=i.width();v=0;k=i.outerWidth();w=0;l=X();m=Y();E=false;n="";x=0;y=0;z=0;o="";p="";q="";r="";s="";t=true;u=false;A=0;B=0;C=0;D=0;F=0;G=g.length-1;g.each(function(b){if(a(this).outerHeight()>w){w=a(this).outerHeight()}if(a(this).outerWidth()>v){v=a(this).outerWidth()}});if(b.randomStart){var c=Math.floor(Math.random()*g.length);x=c;y=k*(b.moveSlideQty+c);z=w*(b.moveSlideQty+c)}else{x=b.startingSlide;y=k*(b.moveSlideQty+b.startingSlide);z=w*(b.moveSlideQty+b.startingSlide)}H();if(b.pager&&!b.ticker){if(b.pagerType=="full"){S("full")}else if(b.pagerType=="short"){S("short")}}if(b.controls&&!b.ticker){J()}if(b.auto||b.ticker){if(b.autoControls){M()}if(b.autoStart){setTimeout(function(){d.startShow(true)},b.autoDelay)}else{d.stopShow(true)}if(b.autoHover&&!b.ticker){N()}}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}V();if(b.captions){T()}b.onAfterSlide(x,g.length,g.eq(x))};this.destroyShow=function(){clearInterval(o);a(".bx-next, .bx-prev, .bx-pager, .bx-auto",h).remove();e.unwrap().unwrap().removeAttr("style");e.children().removeAttr("style").not(".pager").remove();g.removeClass("pager")};this.reloadShow=function(){d.destroyShow();d.initShow()};this.each(function(){if(a(this).children().length>0){d.initShow()}});return this};jQuery.fx.prototype.cur=function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var a=parseFloat(jQuery.css(this.elem,this.prop));return a}})(jQuery)


/***************************************************
		DROP DOWN PANEL
***************************************************/

//Drop Down Panel script (March 29th, 08'): By JavaScript Kit: http://www.javascriptkit.com

var jkpanel={
	controltext: '',
	$mainpanel: null, contentdivheight: 0,

	openclose:function($, speed){
		this.$mainpanel.stop() //stop any animation
		if (this.$mainpanel.attr('openstate')=='closed')
			this.$mainpanel.animate({top: 0}, speed).attr({openstate: 'open'})
		else
			this.$mainpanel.animate({top: -this.contentdivheight+'px'}, speed).attr({openstate: 'closed'})
	},
	
	init:function(file, height, speed){
		jQuery(document).ready(function($){
			jkpanel.$mainpanel=$('<div id="dropdownpanel"><div class="contentdiv"></div><div class="control">'+jkpanel.controltext+'</div></div>').prependTo('body')
			var $contentdiv=jkpanel.$mainpanel.find('.contentdiv')
			var $controldiv=jkpanel.$mainpanel.find('.control').css({cursor: 'wait'})
			$contentdiv.load(file, '', function($){
					var heightattr=isNaN(parseInt(height))? 'auto' : parseInt(height)+'px'
					$contentdiv.css({height: heightattr})
					jkpanel.contentdivheight=parseInt($contentdiv.get(0).offsetHeight)
					jkpanel.$mainpanel.css({top:-jkpanel.contentdivheight+'px', visibility:'visible'}).attr('openstate', 'closed')
					$controldiv.css({cursor:'hand', cursor:'pointer'})
			})
			jkpanel.$mainpanel.find('.control').click(function(){jkpanel.openclose($, speed)});	
		})
	}
}

//Initialize script: jkpanel.init('path_to_content_file', 'height of content DIV in px', animation_duration)
jkpanel.init('panelcontent.html', '330px', 500)


/***************************************************
		SCROLL TO TOP
***************************************************/

//** jQuery Scroll to Top Control script- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com.

var scrolltotop={
	//startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
	//scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).
	setting: {startline:100, scrollto: 0, scrollduration:1000, fadeduration:[500, 100]},
	controlHTML: '<img src="style/images/arrow-top.png" style="width:36px; height:36px" />', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
	controlattrs: {offsetx:15, offsety:15}, //offset of control relative to right/ bottom of window corner
	anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links

	state: {isvisible:false, shouldvisible:false},

	scrollup:function(){
		if (!this.cssfixedsupport) //if control is positioned using JavaScript
			this.$control.css({opacity:0}) //hide control immediately after clicking it
		var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto)
		if (typeof dest=="string" && jQuery('#'+dest).length==1) //check element set by string exists
			dest=jQuery('#'+dest).offset().top
		else
			dest=0
		this.$body.animate({scrollTop: dest}, this.setting.scrollduration);
	},

	keepfixed:function(){
		var $window=jQuery(window)
		var controlx=$window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx
		var controly=$window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety
		this.$control.css({left:controlx+'px', top:controly+'px'})
	},

	togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop()
		if (!this.cssfixedsupport)
			this.keepfixed()
		this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false
		if (this.state.shouldvisible && !this.state.isvisible){
			this.$control.stop().animate({opacity:1}, this.setting.fadeduration[0])
			this.state.isvisible=true
		}
		else if (this.state.shouldvisible==false && this.state.isvisible){
			this.$control.stop().animate({opacity:0}, this.setting.fadeduration[1])
			this.state.isvisible=false
		}
	},
	
	init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop
			var iebrws=document.all
			mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode
			mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body')
			mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>')
				.css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:mainobj.controlattrs.offsety, right:mainobj.controlattrs.offsetx, opacity:0, cursor:'pointer'})
				.attr({title:'Scroll Back to Top'})
				.click(function(){mainobj.scrollup(); return false})
				.appendTo('body')
			if (document.all && !window.XMLHttpRequest && mainobj.$control.text()!='') //loose check for IE6 and below, plus whether control contains any text
				mainobj.$control.css({width:mainobj.$control.width()}) //IE6- seems to require an explicit width on a DIV containing text
			mainobj.togglecontrol()
			$('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
				mainobj.scrollup()
				return false
			})
			$(window).bind('scroll resize', function(e){
				mainobj.togglecontrol()
			})
		})
	}
}

scrolltotop.init()

/***************************************************
		ANIMATED SKILL BARS
***************************************************/
/************************************************
jquery.animate-enhanced plugin v0.70
Author: www.benbarnett.net || @benpbarnett
Copyright (c) 2011 Ben Barnett
Licensed under the MIT license
http://www.opensource.org/licenses/mit-license.php
*************************************************/
(function(r,C,D){function G(a,c,j,g){var i=H.exec(c),f=a.css(j)==="auto"?0:a.css(j);f=typeof f=="string"?w(f):f;typeof c=="string"&&w(c);g=g===true?0:f;var n=a.is(":hidden"),h=a.translation();if(j=="left")g=parseInt(f,10)+h.x;if(j=="top")g=parseInt(f,10)+h.y;if(!i&&c=="show"){g=1;n&&a.css({display:"block",opacity:0})}if(i){a=parseFloat(i[2]);if(i[1])a=(i[1]==="-="?-1:1)*a+parseInt(g,10);return a}else return g}function I(a,c,j,g,i,f,n,h){var b=a.data(k)||jQuery.extend(true,{},J),d=i,p=jQuery.inArray(c,
x)>-1;if(p){var q=b.meta,l=w(a.css(c))||0,s=c+"_o";d=p?i-l:i;q[c]=d;q[s]=a.css(c)=="auto"?0+d:l+d||0;b.meta=q;if(n&&d===0){d=0-q[s];q[c]=d;q[s]=0}}return a.data(k,K(b,c,j,g,d,f,n,h))}function K(a,c,j,g,i,f,n,h){a=typeof a==="undefined"?{}:a;a.secondary=typeof a.secondary==="undefined"?{}:a.secondary;for(var b=e.length-1;b>=0;b--){if(typeof a[e[b]+"transition-property"]==="undefined")a[e[b]+"transition-property"]="";a[e[b]+"transition-property"]+=", "+(f===true&&n===true?e[b]+"transform":c);a[e[b]+
"transition-duration"]=j+"ms";a[e[b]+"transition-timing-function"]=g;a.secondary[f===true&&n===true?e[b]+"transform":c]=f===true&&n===true?h===true&&L?"translate3d("+a.meta.left+"px,"+a.meta.top+"px,0)":"translate("+a.meta.left+"px,"+a.meta.top+"px)":i}return a}function M(a){for(var c in a)if((c=="width"||c=="height")&&(a[c]=="show"||a[c]=="hide"||a[c]=="toggle"))return true;return false}function t(a){for(var c in a)return false;return true}function w(a){return parseFloat(a.replace(/px/i,""))}function N(a,
c,j){var g=jQuery.inArray(a,O)>-1;if((a=="width"||a=="height")&&c===parseFloat(j.css(a)))g=false;return g}var O=["top","right","bottom","left","opacity","height","width"],x=["top","right","bottom","left"],e=["","-webkit-","-moz-","-o-"],P=["avoidTransforms","useTranslate3d","leaveTransforms"],H=/^([+-]=)?([\d+-.]+)(.*)$/,Q=/([A-Z])/g,J={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},k="jQe";r=(document.body||document.documentElement).style;var u=r.WebkitTransition!==undefined?"webkitTransitionEnd":
r.OTransition!==undefined?"oTransitionEnd":"transitionend",E=r.WebkitTransition!==undefined||r.MozTransition!==undefined||r.OTransition!==undefined||r.transition!==undefined,L="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix;jQuery.fn.translation=function(){if(!this[0])return null;for(var a=window.getComputedStyle(this[0],null),c={x:0,y:0},j=e.length-1;j>=0;j--){var g=a.getPropertyValue(e[j]+"transform");if(g&&/matrix/i.test(g)){a=g.replace(/^matrix\(/i,"").split(/, |\)$/g);c={x:a[4],y:a[5]};
break}}return c};jQuery.fn.animate=function(a,c,j,g){a=a||{};var i=!(typeof a.bottom!=="undefined"||typeof a.right!=="undefined"),f=jQuery.speed(c,j,g),n=this,h=0,b=function(){h--;h===0&&typeof f.complete==="function"&&f.complete.apply(n,arguments)};if(!E||t(a)||M(a)||f.duration<=0)return C.apply(this,arguments);return this[f.queue===false?"each":"queue"](function(){var d=jQuery(this),p=jQuery.extend({},f),q=function(){for(var v={},o=e.length-1;o>=0;o--){v[e[o]+"transition-property"]="none";v[e[o]+
"transition-duration"]="";v[e[o]+"transition-timing-function"]=""}d.unbind(u);if(!a.leaveTransforms===true){var F=d.data(k)||{},y={};for(o=e.length-1;o>=0;o--)y[e[o]+"transform"]="";if(i&&typeof F.meta!=="undefined"){o=0;for(var z;z=x[o];++o)y[z]=F.meta[z+"_o"]+"px"}d.css(v).css(y)}d.data(k,null);b.call(d)},l={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInOutQuint:"cubic-bezier(0.5, 0, 0, 0.8)"},s={};l=l[p.easing||"swing"]?l[p.easing||"swing"]:p.easing||"swing";
for(var m in a)if(jQuery.inArray(m,P)===-1){var A=jQuery.inArray(m,x)>-1,B=G(d,a[m],m,A&&a.avoidTransforms!==true);if(N(m,B,d))I(d,m,p.duration,l,A&&a.avoidTransforms===true?B+"px":B,A&&a.avoidTransforms!==true,i,a.useTranslate3d===true);else s[m]=a[m]}m=d.data(k)||{};for(l=e.length-1;l>=0;l--)if(typeof m[e[l]+"transition-property"]!=="undefined")m[e[l]+"transition-property"]=m[e[l]+"transition-property"].substr(2);d.data(k,m).unbind(u);if(!t(d.data(k))&&!t(d.data(k).secondary)){h++;d.css(d.data(k));
var R=d.data(k).secondary;setTimeout(function(){d.bind(u,q).css(R)})}else p.queue=false;if(!t(s)){h++;C.apply(d,[s,{duration:p.duration,easing:p.easing,complete:b,queue:p.queue}])}return true})};jQuery.fn.stop=function(a,c,j){if(!E)return D.apply(this,[a,c]);a&&this.queue([]);for(var g={},i=e.length-1;i>=0;i--){g[e[i]+"transition-property"]="none";g[e[i]+"transition-duration"]="";g[e[i]+"transition-timing-function"]=""}this.each(function(){var f=jQuery(this),n=window.getComputedStyle(this,null),h=
{},b;if(!t(f.data(k))&&!t(f.data(k).secondary)){b=f.data(k);if(c){h=b.secondary;if(!j&&typeof b.meta.left_o!==undefined||typeof b.meta.top_o!==undefined){h.left=typeof b.meta.left_o!==undefined?b.meta.left_o:"auto";h.top=typeof b.meta.top_o!==undefined?b.meta.top_o:"auto";for(b=e.length-1;b>=0;b--)h[e[b]+"transform"]=""}}else for(var d in f.data(k).secondary){d=d.replace(Q,"-$1").toLowerCase();h[d]=n.getPropertyValue(d);if(!j&&/matrix/i.test(h[d])){b=h[d].replace(/^matrix\(/i,"").split(/, |\)$/g);
h.left=b[4]+"px"||"auto";h.top=b[5]+"px"||"auto";for(b=e.length-1;b>=0;b--)h[e[b]+"transform"]=""}}f.unbind(u).css(g).css(h).data(k,null)}else D.apply(f,[a,c])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);


// Modernizr v1.7  www.modernizr.com
window.Modernizr=function(a,b,c){function G(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=!!(a[b]in l);return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return a.getContext&&a.getContext("2d")},r.canvastext=function(){return e.canvas&&C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return"ontouchstart"in a||w("@media ("+o.join("touch-enabled),(")+"modernizr)")},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;){var d=p[b].toLowerCase();if(a[d+"_indexedDB"]||a[d+"IndexedDB"])return!0}return!1},r.hashchange=function(){return x("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return !!(a.history&&history.pushState)},r.draganddrop=function(){return x("dragstart")&&x("drop")},r.websockets=function(){return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(//:),url(//:),red url(//:)");return(new RegExp("(url\\s*\\(.*?){3}")).test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius","",function(a){return D(a,"orderRadius")})},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=w("@media ("+o.join("transform-3d),(")+"modernizr)"));return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){var a,c,d=h||g,e=b.createElement("style"),f=b.implementation||{hasFeature:function(){return!1}};e.type="text/css",d.insertBefore(e,d.firstChild),a=e.sheet||e.styleSheet;var i=f.hasFeature("CSS2","")?function(b){if(!a||!b)return!1;var c=!1;try{a.insertRule(b,0),c=/src/i.test(a.cssRules[0].cssText),a.deleteRule(a.cssRules.length-1)}catch(d){}return c}:function(b){if(!a||!b)return!1;a.cssText=b;return a.cssText.length!==0&&/src/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(b.split(" ")[0])===0};c=i('@font-face { font-family: "font"; src: url(data:,); }'),d.removeChild(e);return c},r.video=function(){var a=b.createElement("video"),c=!!a.canPlayType;if(c){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return c},r.audio=function(){var a=b.createElement("audio"),c=!!a.canPlayType;c&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;"));return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webWorkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,f&&a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function p(a,b){var c=-1,d=a.length,e,f=[];while(++c<d)e=a[c],(b=e.media||b)!="screen"&&f.push(p(e.imports,b),e.cssText);return f.join("")}function o(a){var b=-1;while(++b<e)a.createElement(d[b])}var c="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",d=c.split("|"),e=d.length,f=new RegExp("(^|\\s)("+c+")","gi"),g=new RegExp("<(/*)("+c+")","gi"),h=new RegExp("(^|[^\\n]*?\\s)("+c+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),i=b.createDocumentFragment(),j=b.documentElement,k=j.firstChild,l=b.createElement("body"),m=b.createElement("style"),n;o(b),o(i),k.insertBefore(m,k.firstChild),m.media="print",a.attachEvent("onbeforeprint",function(){var a=-1,c=p(b.styleSheets,"all"),k=[],o;n=n||b.body;while((o=h.exec(c))!=null)k.push((o[1]+o[2]+o[3]).replace(f,"$1.iepp_$2")+o[4]);m.styleSheet.cssText=k.join("\n");while(++a<e){var q=b.getElementsByTagName(d[a]),r=q.length,s=-1;while(++s<r)q[s].className.indexOf("iepp_")<0&&(q[s].className+=" iepp_"+d[a])}i.appendChild(n),j.appendChild(l),l.className=n.className,l.innerHTML=n.innerHTML.replace(g,"<$1font")}),a.attachEvent("onafterprint",function(){l.innerHTML="",j.removeChild(l),j.appendChild(n),m.styleSheet.cssText=""})}(a,b),e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document)


