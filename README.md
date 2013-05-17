# ScrollUp 1.1.2 ![Build Status](!https://travis-ci.org/psenger/scrollup.png)

## How to use
Simply include the `jquery.scrollUp.min.js` file and place the following in the head of your document (make sure jQuery is included):

** Minimum setup **

    $(function () {
        $.scrollUp();
    });

** Example with default options **

    $(function () {
        $.scrollUp({
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
        });
    });

** activeOverlay **

To create a visible line to help determine an ideal scroll distance from the top, assign a valid CSS colour to the `activeOverlay` setting. This could be HEX, HSLA or RGB(A). Example: `activeOverlay: '#00FFFF'`. [See the demo for an example](http://markgoodyear.com/labs/scrollup) .

##Fully Customisable
ScrollUp is fully customisable through CSS which makes it simple to fit right into your project. Simply target the scrollUp&rsquo;s generated ID in your CSS file and set your styles. Below is a basic style example:

    #scrollUp {
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        background: #555;
        color: #fff;
    }

** Use background image **
To use a background image instead of text, simple set `scrollImg: true`. This will allow you to set a background image in your CSS file. [Check out the demo](http://markgoodyear.com/labs/scrollup/) for more style and feature examples.