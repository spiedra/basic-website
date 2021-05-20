var canvas = null,
    ctx = null,
    x = 50,
    y = 17,
    widthBrowser = window.outerWidth;

window.requestAnimationFrame = (
    function () {
        return window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationRame ||
            function (callback) {
                window.setTimeout(callback, 17);
            }
    }()
);

function paint(ctx) {
    ctx.fillStyle = '#FFF';
    ctx.fillRect(0, 0, widthBrowser, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.fillRect(x, y, 20, 20);
}

function update() {
    x += 2;
    if (x > widthBrowser)
        x = 0;
}

function run() {
    window.requestAnimationFrame(run);
    update();
    paint(ctx);
}

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    run();
}

window.addEventListener('load', init, false);