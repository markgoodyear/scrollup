# ScrollUp 2.0.0 [![Build Status](https://travis-ci.org/markgoodyear/scrollup.png?branch=v2)](https://travis-ci.org/markgoodyear/scrollup)

<h2>How to use</h2>
Simply include the <code>jquery.scrollUp.min.js</code> file and place the following in the head of your document (make sure jQuery is included):

<strong>Minimum setup</strong>
<pre><code>$(function () {
    $.scrollUp();
});</code></pre>
<strong>Example with default options</strong>
<pre><code>$(function () {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 300, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: 'Scroll to top', // Text for element, can contain HTML
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647 // Z-Index for the overlay
    });
});
</code></pre>
<strong>activeOverlay</strong>

To create a visible line to help determine an ideal scroll distance from the top, assign a valid CSS colour to the <code>activeOverlay</code> setting. This could be HEX, HSLA or RGB(A). Example: <code>activeOverlay: '#00FFFF'</code>. <a href="http://markgoodyear.com/labs/scrollup" target="_blank">See the demo for an example</a>.
<p style="text-align: center;"></p>

<h2>Fully Customizable</h2>
ScrollUp is fully customizable via CSS which makes it simple to fit right into your project. Simply target the scrollUp's generated ID in your CSS file and set your styles. Below is a basic style example:
<pre><code>#scrollUp {
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background: #555;
    color: #fff;
}
</code></pre>

<strong>Use background image</strong>
To use a background image instead of text, simply set <code>scrollImg: true</code>. This will allow you to set a background image in your CSS file.

<a href="http://markgoodyear.com/labs/scrollup/" target="_blank">Check out the demo</a> for more style and feature examples.