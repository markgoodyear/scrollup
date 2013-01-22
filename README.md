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
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: 'Scroll to top', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
});
</code></pre>
<strong>activeOverlay</strong>

To create a visible line to help determin an ideal scroll distance from the top, assign a valid CSS colour to the <code>activeOverlay</code> setting. This could be HEX, HSLA or RGB(A). Example: <code>activeOverlay: '#00FFFF'</code>. <a href="http://markgoodyear.com/labs/scrollup" target="_blank">See the demo for an example</a>.
<p style="text-align: center;"></p>

<h2>Fully Customisable</h2>
ScrollUp is fully customisable through CSS which makes it simple to fit right into your project. Simply target the scrollUp's generated ID in your CSS file and set your styles. Below is a basic style exampl:
<pre><code>#scrollUp {
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background: #555;
    color: #fff;
}	
</code></pre>
<a href="http://markgoodyear.com/labs/scrollup/" target="_blank">Check out the demo</a> for more style and feature examples.
