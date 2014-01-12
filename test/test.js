document.addEventListener('DOMContentLoaded', function () {
  var a = document.getElementById("ok");
  a.addEventListener('click', function (e) {
    var target = clickTarget(e);
    console.log( target );
    e.preventDefault();
  });
});
