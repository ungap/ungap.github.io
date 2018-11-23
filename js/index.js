addEventListener(
  'DOMContentLoaded',
  function () {
    var a = document.querySelector('a');
    var color = getComputedStyle(a, null).getPropertyValue('color');
    var style = document.createElement('style');
    style.textContent = 'a:visited{color:' + color + ';}';
    document.getElementsByTagName('head')[0].appendChild(style);
  },
  {once: true}
);
