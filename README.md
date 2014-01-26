click-target.js
==============

Determine whether a link click event will open in same or new tab/window.

Left-clicks with modifier keys and middle-clicks are considered new tab/window clicks.

## Example

Click link and see console output on the test page: [http://AndersDJohnson.github.io/click-target.js/test/](http://AndersDJohnson.github.io/click-target.js/test/).

## Install

Either download, or install via [Bower][bower]:

`$ bower install click-target`

Include `dist/click-target.js` or `dist/click-target.min.js` in your page.

## Usage

Supports [AMD][amd] and browser global (`window.clickTarget`).

Then use, for example:

```javascript
var linkElement = document.querySelector('a');
linkElement.addEventListener('click', function (e) {
  var target = clickTarget(e);
  // => target == "_self" || target == "_blank"
});
```

Or with [jQuery][jquery]:

```javascript
$('a').on('click', function (e) {
  var target = clickTarget(e);
  // => target == "_self" || target == "_blank"
});


[bower]: http://bower.io/ 
[amd]: http://en.wikipedia.org/wiki/Asynchronous_module_definition
[jquery]: http://jquery.com/
