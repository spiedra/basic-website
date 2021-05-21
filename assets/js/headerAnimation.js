var canvas = null,
    ctx = null,
    x = 0,
    y = 44;

var img;
// img.src = 'mariposa.png';

var img = document.getElementById("image");

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
    setAttributeToCava();
    ctx.drawImage(this.img, x, y, 50, 50);
}

function update() {
    x += 1;
    if (x > window.outerWidth) {
        x = 0;
    }

    if (y > -40) {
        y -= 1;
    } else {
        y = 80;
    }
}

function run() {
    window.requestAnimationFrame(run);
    update();
    paint(ctx);
}

function init() {
    this.img = new Image();
    img.src = 'https://image.flaticon.com/icons/png/512/338/338259.png';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    run();
}

function setAttributeToCava() {
    var canvaComponent = document.querySelector('.header__animation');
    canvaComponent.setAttribute("width", window.outerWidth);
}

window.addEventListener('load', init, false);