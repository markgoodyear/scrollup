/*

scrollUp v1.1.2
Author: Mark Goodyear - http://www.markgoodyear.com
Git: https://github.com/markgoodyear/scrollup

Copyright 2013 Mark Goodyear
Licensed under the MIT license
http://www.opensource.org/licenses/mit-license.php

Twitter: @markgdyr

*/

;(function($, window, document, undefined) {

	$.fn.scrollUp = function (options) {

		var o = $.extend({}, $.fn.scrollUp.defaults, options),
			scrollId = '#' + o.scrollName;

		$.fn.scrollUp.settings = o;

		// Create element
		$('<a/>', {
			id: o.scrollName,
			href: '#top',
			title: o.scrollText
		}).appendTo('body');

		// If not using an image display text
		if (!o.scrollImg) {
			$(scrollId).text(o.scrollText);
		}

		// Minium CSS to make the magic happen
		$(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

		// Active point overlay
		if (o.activeOverlay) {
			$("body").append("<div id='"+ o.scrollName +"-active'></div>");
			$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': ''+o.zIndex });
		}

		// Scroll function
		$(window).scroll($.fn.scrollUp.scrollEventFunction);

		// To the top
		$(scrollId).click( function(event) {
			$('html, body').animate({scrollTop:0}, o.topSpeed);
			event.preventDefault();
		});

	};

    $.fn.scrollUp.scrollEventFunction = function(){
        var o = $.fn.scrollUp.defaults, scrollId = '#' + o.scrollName;
        switch (o.animation) {
            case "fade":
                $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
                break;
            case "slide":
                $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
                break;
            default:
                $( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
        }
    };

	// Defaults
	$.fn.scrollUp.defaults = {
			scrollName: 'scrollUp', // Element ID
			topDistance: 300, // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: 'Scroll to top', // Text for element
			scrollImg: false, // Set true to use image
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647 // Z-Index fo the overlay
	};
		
	// Destroy the instantiated scrollUp plugin and clean up all modifications the widget has made to the DOM
	$.fn.scrollUp.destroy = function (){
		$( '#' + $.fn.scrollUp.settings.scrollName ).remove();
		$( '#' + $.fn.scrollUp.settings.scrollName + '-active' ).remove();
        $(window).unbind( 'scroll', $.fn.scrollUp.scrollEventFunction );
	};
	
	$.scrollUp = $.fn.scrollUp;
	
})(jQuery, window, document);