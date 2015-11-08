# ScrollUp [![Build Status](https://travis-ci.org/markgoodyear/scrollup.svg?branch=master)](https://travis-ci.org/markgoodyear/scrollup) [![devDependency Status](https://david-dm.org/markgoodyear/scrollup/dev-status.svg)](https://david-dm.org/markgoodyear/scrollup#info=devDependencies)
> A JavaScript plugin to create a customisable 'Scroll to top' feature that will work with any website

## Installing with Bower

To install ScrollUp with Bower:

```bash
bower install scrollup
```

To install ScrollUp with npm:

```
npm install scrollup
```

## How to use

### Minimum setup

The simplest way to get started is by adding the following markup to you page:

```markup
<div id="scrollup">Back Up</div>
```

Then initialising the ScrollUp on the element with the following:

```js
<script>
    ScrollUp.init("#scrollup");
</script>
```

### Adding options
You can add options, such as the scroll distance via a second paramater:

```js
<script>
    ScrollUp.init("#scrollup", {
        scrollDistance: 400
    });
</script>
```

**Default options**

```js
{
    // Trigger template if you want to inject an element.
    triggerTemplate: false,

    // Distance from the top before showing the element.
    scrollDistance: 400,

    // Throttle the scroll event (ms).
    scrollThrottle: 250,

    // How fast to scroll back to the top (ms).
    scrollDuration: 500,

    // Scroll easing type. Avaiable: `linear|easeInOutQuad|easeInOutCube`.
    scrollEasing: 'linear',

    // Set a custom target element for scrolling to.
    scrollTarget: false,

    // Element to monitor scoll on. Useful for scrolling inside divs.
    scrollElement: window,

    // Classes to use on the ScrollUp element.
    classes: {
        // The initial state class, gets added when ScrollUp is shown for the first time. Use this class to show ScrollUp for the first time. See the demo files for an example.
        init: 'scrollup--init',

        // Added when ScrollUp is visible.
        show: 'scrollup--show',

        // Added when ScrollUp is hidden.
        hide: 'scrollup--hide'
    },

    // Callbacks / Events.
    onInit: null,
    onDestroy: null,
    onShow: null,
    onHide: null,
    onTop: null
}
```

### `triggerTemplate`
Rather than adding an element to your markup, you can have ScrollUp inject one in by using the `triggerTemplate` option:

```js
ScrollUp.init({
    triggerTemplate: '<a id="scrollup">Back up</a>'
});

### Destroy method
If you need to destroy the instance of ScrollUp, use the following to remove all modifications to the DOM:

## Animate.css
ScrollUp 3 works hand-in-hand with [animate.css](https://daneden.github.io/animate.css/) to create custom animations. Here is an example:

```
{
    classes: {
        // The base animate class.
        init: 'animate,

        // Flip In X animation.
        show: 'flipInX',

        // Fade Out Down animation.
        hide: 'fadeOutDown'
    },
}

```js
ScrollUp.destroy();
```

## Fully Customizable
ScrollUp is fully customisable via CSS which makes it simple to fit right into your project. See the demo folder for examples.

## Contributing
Please see [CONTRIBUTE.md](CONTRIBUTE.md) for info on contributing.

## Demo
<a href="http://markgoodyear.com/labs/scrollup/" target="_blank">Check out the demo</a> for more style and feature examples.
