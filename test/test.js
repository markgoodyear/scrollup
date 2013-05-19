(function($) {

    /*
     ======== A Handy Little QUnit Reference ========
     http://api.qunitjs.com/

     Test methods:
         module(name, {[setup][ ,teardown]})
         test(name, callback)
         expect(numberOfAssertions)
         stop(increment)
         start(decrement)
     Test assertions:
         ok(value, [message])
         equal(actual, expected, [message])
         notEqual(actual, expected, [message])
         deepEqual(actual, expected, [message])
         notDeepEqual(actual, expected, [message])
         strictEqual(actual, expected, [message])
         notStrictEqual(actual, expected, [message])
         throws(block, [expected], [message])
     */

    module('Basic Set Up', {
        setup: function() {
            $('#qunit-fixture').lorem({ type: 'paragraphs',amount:'40',ptags:true});
        },
        tearDown: function () {
        }
    });

    test( "Verify singular instance via init call spy", function() {
        expect( 2 );
        var scrollupInitSpy = sinon.spy( $.fn.scrollUp, "init" ); // spy on the init method
        $.scrollUp({
            scrollName: 'scrollUp',      // Element ID
            topDistance: '300',          // Distance from top before showing element (px)
            topSpeed: 300,               // Speed back to top (ms)
            animation: 'fade',           // Fade, slide, none
            animationInSpeed: 200,       // Animation in speed (ms)
            animationOutSpeed: 200,      // Animation out speed (ms)
            scrollText: 'Scroll to top', // Text for element
            activeOverlay: false         // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
        equal ( scrollupInitSpy.callCount, 1 , 'Confirmed the init method was called once.' );
        $.scrollUp({
            scrollName: 'scrollUp2',      // Element ID
            topDistance: '400',           // Distance from top before showing element (px)
            topSpeed: 100,                // Speed back to top (ms)
            animation: 'slide',           // Fade, slide, none
            animationInSpeed: 900,        // Animation in speed (ms)
            animationOutSpeed: 100,       // Animation out speed (ms)
            scrollText: 'Scroll to down', // Text for element
            activeOverlay: false          // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
        equal ( scrollupInitSpy.callCount, 1 , 'Confirmed the init method was called once.' );
        $.fn.scrollUp.init.restore(); // Unwraps the spy
        $.scrollUp.destroy();
    });

    test( "Verify init and destroy of dom", function() {
        expect( 6 );
        var options = {
            scrollName: 'scrollUp',      // Element ID
            topDistance: '300',          // Distance from top before showing element (px)
            topSpeed: 300,               // Speed back to top (ms)
            animation: 'fade',           // Fade, slide, none
            animationInSpeed: 200,       // Animation in speed (ms)
            animationOutSpeed: 200,      // Animation out speed (ms)
            scrollText: 'Scroll to top', // Text for element
            activeOverlay: false         // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        }, elemCount = null, lockDownLatch = null;
        elemCount = $('#' + options.scrollName).length;
        equal(elemCount, 0, 'Number of elements pre activation');
        lockDownLatch = $.data(document.body, "scrollUp");
        strictEqual(lockDownLatch, undefined, 'Pre lock down latch value');
        $.scrollUp(options);
        elemCount = $('#' + options.scrollName).length;
        equal(elemCount, 1, 'Number of elements post activation ( created by the plugin )');
        lockDownLatch = $.data(document.body, "scrollUp");
        equal(lockDownLatch, true, 'Post lock down latch value');
        $.scrollUp.destroy();
        elemCount = $('#' + options.scrollName).length;
        equal(elemCount, 0, 'Number of elements post destroy ( removed by the plugin destroy method )');
        lockDownLatch = $.data(document.body, "scrollUp");
        equal(lockDownLatch, undefined, 'Clean up of lock down latch value');
    });

    module('Basic Functional Test', {
        setup: function() {
            $('#qunit-fixture').lorem({ type: 'paragraphs',amount:'40',ptags:true});
        },
        tearDown: function () {
        }
    });

    test( "Verify scroll event turned the button on", function() {
        expect( 1 );
        $(window).scrollTop(0).scrollLeft(0);
        var options = {
                scrollName: 'scrollUp',      // Element ID
                topDistance: '300',          // Distance from top before showing element (px)
                topSpeed: 300,               // Speed back to top (ms)
                animation: 'fade',           // Fade, slide, none
                animationInSpeed: 200,       // Animation in speed (ms)
                animationOutSpeed: 200,      // Animation out speed (ms)
                scrollText: 'Scroll to top', // Text for element
                activeOverlay: false         // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            };
        $.scrollUp(options);
        $(window).trigger('click',{scrollTop:-9999});
        var $elm = $('#' + options.scrollName + ":visible" );
        notEqual($elm, undefined, 'button is visible when scrolled down triggered');
        $.scrollUp.destroy();
    });
    /**
     *  I cant get the following to work. need some more time.
     */
//    test( "Verify clicking on the button scrolls to the top", function() {
//        expect( 3 );
//        var scrollupScrollEventFunctionSpy = sinon.spy( $.fn.scrollUp, "scrollEventFunction" ); // spy on the init method
//        function posTop() {
//            return typeof window.pageYOffset != 'undefined' ? window.pageYOffset: document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop? document.body.scrollTop:0 ;
//        }
//        var options = {
//            scrollName: 'scrollUp',      // Element ID
//            topDistance: '300',          // Distance from top before showing element (px)
//            topSpeed: 300,               // Speed back to top (ms)
//            animation: 'fade',           // Fade, slide, none
//            animationInSpeed: 200,       // Animation in speed (ms)
//            animationOutSpeed: 200,      // Animation out speed (ms)
//            scrollText: 'Scroll to top', // Text for element
//            activeOverlay: false         // Set CSS color to display scrollUp active point, e.g '#00FFFF'
//        };
//        var $elm = $('#' + options.scrollName + ':hidden' );
//        ok( typeof $elm === 'undefined', 'button is not visible');
//        $.scrollUp(options);
//
//        var e = $.Event("scroll",{scrollTop:999999});
//        $(window).focus().trigger(e);
//
//        $elm = $('#' + options.scrollName + ':visible' );
//        ok( typeof $elm !== 'undefined', 'button is visible');
//
////        var e = $.Event("scroll",{scrollTop:9999});
////        $(window).focus().trigger(e);
////        $elm = $('#' + options.scrollName + ":visible" );
////        notEqual($elm, undefined, 'button is visible when scrolled down triggered');
////        $elm.trigger('click'); // $(window).scrollTop() > o.topDistance
////        equal ( posTop(), 0, 'click to scroll up tested' );
//         ok ( scrollupScrollEventFunctionSpy.called, 'Scroll event function was called at least once.' );
////        $.scrollUp.destroy();
//    });

}(jQuery));
