(function () {
  var canvas = document.querySelector('#favicon-canvas');
  var context = canvas.getContext('2d');
  var first = true;
  if (!!context) {
    console.log('no canvas');
    var favicon = document.querySelector('link[rel*="icon"]');
    var drawTimeout = setInterval(draw, 1000);
  }

  var colors = [
    '#343D46',
    '#bf616a',
    '#d08770',
    '#a3be8c',
    '#ebcb8b',
    '#8fa1b3',
    '#b48ead',
    '#96b5b4',
    '#a7adba',
    //'#eff1f5',
    '#2B333C',
    '#5e6973'
  ];

  function draw () {
      context.clearRect(0,0,32,32);
      // draw 16 rectangles at random colors
      for (let x = 0; x < 32; x += 8) {
        for (let y = 0; y < 32; y += 8) {
          cube(x, y);
        }
      }
  

      favicon.href = canvas.toDataURL('image/png');

      function cube(x, y) {
        context.beginPath();
        context.rect(x, y, 8, 8);
        context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        context.fill();
      }
  }

  
})();