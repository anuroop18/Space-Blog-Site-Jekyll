var demo = (function (window) {

    // For options see: https://github.com/qrohlf/Trianglify
    var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 90,
        variance: 1,
        stroke_width: 1,
        x_colors: 'random',
        y_colors: 'random'
    }).svg(); // Render as SVG.

    $('.pattern').append(pattern);

})(window);

window.onload = demo;
