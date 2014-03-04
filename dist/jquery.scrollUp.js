/*!
 * scrollup v3.0.0-dev
 * Author: Mark Goodyear - http://markgoodyear.com — @markgdyr
 * Git: https://github.com/markgoodyear/scrollup
 * Copyright 2014, MIT
 */
;(function ( $, window, document, undefined ) {

    // Defaults
    var defaults = {

            // Trigger options
            triggerElem: '<a/>',
            triggerInner: 'Scroll to Top',
            triggerCss: {
                display: 'none',
                zIndex: 2147483647,
                position: 'fixed'
            },
            triggerAttr: {
                id: 'scrollUp',
                title: 'Scroll to top',
                href: '#top',
            },

            // Trigger animations
            triggerIn: 'fadeIn',
            triggerOut: 'fadeOut',
            triggerInSpeed: 200,
            triggerOutSpeed: 200,

            // Scroll options
            scrollDistance: 400,
            scrollFrom: 'top',
            scrollSpeed: 300,
            scrollEasing: 'linear',

            // Trigger active point, usefull for debuging
            triggerActivePoint: null,

            // Callbacks
            onTriggerShow: null,
            onTriggerHide: null,
            onTriggerClick: null

        };

    // ScrollUp constructor
    var ScrollUp = function( element, options ) {
        this.element = element;
        this.options = $.extend(true, {}, defaults, options);
        this.init();
    };

    // Check if elem is body
    var _isBody = function(elem) {
        return elem.toString() === '[object HTMLBodyElement]';
    };

    // Prototype methods
    ScrollUp.prototype = {

        // Init
        init: function() {

            // Reference this
            var scope = this;

            // Create trigger element
            var $triggerElem = $(scope.options.triggerElem)
                .attr(scope.options.triggerAttr)
                .css(scope.options.triggerCss)
                .html(scope.options.triggerInner)
                .appendTo(scope.element);

            // Define scroll distance
            var docHeight = (_isBody(scope.element)) ? $(document).height() : scope.element.scrollHeight;
            var winHeight = (_isBody(scope.element)) ? $(window).height() : $(scope.element).height();
            var scrollableDis = docHeight - winHeight;

            // Switch scrollFrom & make sure trigger fires when hitting
            // the bottom if doc height isn't high enough
            var scrollDis;
            switch(scope.options.scrollFrom) {
                case 'top':
                    scrollDis = (docHeight - winHeight < scope.options.scrollDistance) ? scrollableDis : scope.options.scrollDistance;
                break;
                case 'bottom':
                    scrollDis = (scrollableDis - scope.options.scrollDistance < scope.options.scrollDistance) ? scrollableDis : scrollableDis - scope.options.scrollDistance;
                break;
            }

            // Display trigger active point
            if (scope.options.triggerActivePoint) {

                // If window, attach to body, else attach to scroll element
                var activeContainer = (scope.element === 'body') ? 'body' : scope.element;

                // Create the trigger active point
                var $activeElem = $('<div/>')
                    .attr({
                        id: scope.options.triggerAttr.id + '-active'
                    })
                    .css({
                        position: 'absolute',
                        top: scrollDis + 'px',
                        width: '100%',
                        borderTop: '1px dotted ' + scope.options.triggerActivePoint,
                        zIndex: 2147483647
                    })
                    .appendTo(activeContainer);
            }

            // Check if using body or not
            var scrollAttachment = (_isBody(scope.element)) ? window : scope.element;

            // Scroll Event
            var scrollEvent = $(scrollAttachment).scroll(function() {

                if ($(scrollAttachment).scrollTop() >= scrollDis) {

                    // Only show when hidden
                    if ($triggerElem.is(':hidden')) {
                        if (!scope.options.onTriggerShow) {
                            $triggerElem[scope.options.triggerIn](scope.options.triggerInSpeed);
                        } else {
                            scope.options.onTriggerShow.call($triggerElem);
                        }
                    }

                } else {

                    // Only hide when visible
                    if ($triggerElem.is(':visible')) {
                        if (!scope.options.onTriggerHide) {
                            $triggerElem[scope.options.triggerOut](scope.options.triggerOutSpeed);
                        } else {
                            scope.options.onTriggerHide.call($triggerElem);
                        }
                    }
                }

            });

            // Click function
            $triggerElem.on('click', function(e) {
                e.preventDefault();
                scope._clickFunc();
            });
        },

        _clickFunc: function() {

            if (!this.options.onTriggerClick) {

                // If not using window, set to elem to scroll.attachTo
                var toScroll = (this.element === 'body') ? 'html, body' : this.element;

                // Animate up
                $(toScroll).animate({
                    scrollTop: 0
                }, this.options.scrollSpeed, this.options.scrollEasing);
            } else {
                this.options.onTriggerClick.call();
            }

        },

        // Destroy
        destroy: function() {

            /**
             * @TODO: Need to kill scroll event and remove DOM elements
             */
        }
    };


    /**
     * Plugin wrapper
     */
    $.fn.scrollUp = function(options) {
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'scrollUp')) {
                    $.data(this, 'scrollUp', new ScrollUp( this, options ));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            var returns;
            this.each(function () {
                var instance = $.data(this, 'scrollUp');
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    returns = instance[options].apply( instance, Array.prototype.slice.call( arguments, 1 ) );
                }
                if (options === 'destroy') {
                    $.data(this, 'scrollUp', null);
                }
            });
            return returns !== undefined ? returns : this;
        }
    };

}(jQuery, window, document));
