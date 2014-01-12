(function (root, factory) {
  var moduleName = 'clickTarget';
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return (root[moduleName] = factory());
    });
  } else {
    root[moduleName] = factory();
  }
}(this, function () {
  var clickTarget = function (e) {
    if ( e.which == 2 // middle click
      || (
        e.which == 1 // left click
        && ( e.ctrlKey || e.shiftKey || e.metaKey ) // modifier key
      )
    ) {
      return '_blank';
    }
    else {
      return '_self';
    }
  };
  return clickTarget;
}));
