# ScrollUp [![Build Status](https://travis-ci.org/markgoodyear/scrollup.svg?branch=master)](https://travis-ci.org/markgoodyear/scrollup) [![devDependency Status](https://david-dm.org/markgoodyear/scrollup/dev-status.svg)](https://david-dm.org/markgoodyear/scrollup#info=devDependencies)
> A jQuery plugin to create a customisable 'Scroll to top' feature that will work with any website

## Installing with Bower

To install scrollUp with Bower:

```bash
bower install scrollup
```

## How to use

Simply include the `jquery.scrollUp.min.js` file and place the following in the head of your document (make sure **jQuery** is included):

### Minimum setup

```js
$(function () {
    $.scrollUp();
});
```

**Example with default options**

```js
$(function () {
    $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 300,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: 'Scroll to top', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    });
});
```

### activeOverlay

To create a visible line to help determine an ideal scroll distance from the top,
assign a valid CSS colour to the `activeOverlay` setting. This could be HEX, HSLA or RGB(A).
Example: `activeOverlay: '#00FFFF'`. <a href="http://markgoodyear.com/labs/scrollup" target="_blank">See the demo for an example</a>.


### scrollFrom

New feature in v2.0.0. Display the `scrollUp` element either the set distance from the top (default),
or from the bottom of the page.

### Destroy method

New feature in v2.0.0. If you need to destroy the instance of scrollUp,
simple use the following to remove all modifications to the DOM:

```js
$.scrollUp.destroy();
```


## Fully Customizable
ScrollUp is fully customisable via CSS which makes it simple to fit right into your project.
Simply target the scrollUp's generated ID in your CSS file and set your styles.
Below is a basic style example:

```css
#scrollUp {
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #555;
    color: #fff;
}
```

### Use background image

To use a background image instead of text, simply set `scrollImg: true`.
This will allow you to set a background image in your CSS file.


## Contributing

Please see [CONTRIBUTE.md](CONTRIBUTE.md) for info on contributing.


## Demo

<a href="http://markgoodyear.com/labs/scrollup/" target="_blank">Check out the demo</a> for more style and feature examples.
