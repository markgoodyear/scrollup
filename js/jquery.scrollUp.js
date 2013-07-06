/*

 scrollUp v1.1.4
 Author: Mark Goodyear - http://www.markgoodyear.com
 Git: https://github.com/markgoodyear/scrollup

 Copyright 2013 Mark Goodyear
 Licensed under the MIT license
 http://www.opensource.org/licenses/mit-license.php

 Twitter: @markgdyr

 */
;(function($, window) {
    $.fn.scrollUp = function (options) {
        // Ensure that only one scrollUp exists.
        if ( ! $.data( document.body, "scrollUp" ) ) {
            $.data( document.body, "scrollUp", true );
            $.fn.scrollUp.init(options);
        }
    };
    $.fn.scrollUp.init = function(options) {
        // apply any options to the settings, override the defaults.
        var o = $.fn.scrollUp.settings = $.extend({}, $.fn.scrollUp.defaults, options),
        // Create element
        $reference = $("<a/>", { id: o.scrollName, href: "#top", title: o.scrollText }).appendTo("body");
        // If not using an image display text
        if (!o.scrollImg) {
            $reference.text(o.scrollText);
        }
        // Minimum CSS to make the magic happen
        $reference.css({"display":"none","position": "fixed","z-index": o.zIndex});
        // Active point overlay
        if (o.activeOverlay) {
            $("<div/>", { id: o.scrollName + "-active" }).css({ "position": "absolute", "top": o.topDistance + "px", "width": "100%", "border-top": "1px dotted " + o.activeOverlay, "z-index": "" + o.zIndex }).appendTo("body");
        }
        // Scroll function
        $(window).scroll($.fn.scrollUp.scrollEventFunction);
        // To the top
        $reference.click( function(event) {
            $("html, body").animate({scrollTop:0}, o.topSpeed, o.easingType);
            event.preventDefault();
        });
    };
    // function to be used in the scroll event.
    $.fn.scrollUp.scrollEventFunction = function(){
        var o = $.fn.scrollUp.settings, $reference = $( "#" + o.scrollName );
        switch (o.animation) {
            case "fade":
                $( ($(window).scrollTop() > o.topDistance) ? $reference.fadeIn(o.animationInSpeed) : $reference.fadeOut(o.animationOutSpeed) );
                break;
            case "slide":
                $( ($(window).scrollTop() > o.topDistance) ? $reference.slideDown(o.animationInSpeed) : $reference.slideUp(o.animationOutSpeed) );
                break;
            default:
                $( ($(window).scrollTop() > o.topDistance) ? $reference.show(0) : $reference.hide(0) );
        }
    };
    // Defaults
    $.fn.scrollUp.defaults = {
        scrollName: "scrollUp", // Element ID
        topDistance: 300, // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        easingType: "linear", // Scroll to top easing (see http://easings.net/)
        animation: "fade", // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: "Scroll to top", // Text for element
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g "#00FFFF"
        zIndex: 2147483647 // Z-Index fo the overlay
    };
    // Destroy the instantiated scrollUp plugin and clean up all modifications the widget has made to the DOM
    $.fn.scrollUp.destroy = function (){
        $.removeData( document.body, "scrollUp" );
        $( "#" + $.fn.scrollUp.settings.scrollName ).remove();
        $( "#" + $.fn.scrollUp.settings.scrollName + "-active" ).remove();
        if ($.fn.jquery.split(".")[1] >= 7) {
            $(window).off( "scroll", $.fn.scrollUp.scrollEventFunction );
        } else {
            $(window).unbind( "scroll", $.fn.scrollUp.scrollEventFunction );
        }
    };
    $.scrollUp = $.fn.scrollUp;
})(jQuery, window);