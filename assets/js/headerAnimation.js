var canvas = null,
    ctx = null,
    x = 0,
    y = 44;

var img;

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

function paint() {
    // setAttributeToCava();
    ctx.drawImage(this.img, x, y, 70, 70);
}

function update(time) {
    time *= 0.001; // seconds;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    x = Math.sin(time * 2) * 100 + 100;
    y = Math.sin(time * 5) * 50 + 50;
    paint();
    window.requestAnimationFrame(update);
}

function run() {
    update();
    window.requestAnimationFrame(update);
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
    canvaComponent.setAttribute("width", window.outerWidth / 2);
}

window.addEventListener('load', init, false);