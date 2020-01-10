import Point from './Point'

var drawField = document.querySelector("#draw-field");


let x0 = null, y0 = null, x1 = null, y1 = null;
let r = 253, g = 216, b = 53, a = 255;


let arr = [];

drawField.addEventListener("click", event => {

    if (arr.length === 4) {
        arr = [];
        x0 = null;
        y0 = null;
        x1 = null;
        y1 = null;

    }

    if (arr.length === 2) {
        x1 = event.clientX - drawField.getBoundingClientRect().left
        console.log(`x1: ${x1}`);
        y1 = event.clientY - drawField.getBoundingClientRect().top
        console.log(`y1: ${y1}`);
        arr.push(x1, y1);

        if (arr[0] < arr[2]) {
            line(arr[0], arr[1], arr[2], arr[3]);
            g -= 40;
        } else {
            line(arr[2], arr[3], arr[0], arr[1]);
            g -= 40;
        }
    }

    if (arr.length === 0) {
        x0 = event.clientX - drawField.getBoundingClientRect().left
        console.log(`x0: ${x0}`);
        y0 = event.clientY - drawField.getBoundingClientRect().top
        console.log(`y0: ${y0}`);
        arr.push(x0, y0);
    }

    console.log(event.clientX - drawField.getBoundingClientRect().left);
});


const line = (x0, y0, x1, y1) => {
    let x, dy, dx, y, m;

    dy = y1 - y0;
    dx = x1 - x0;
    m = dy / dx;
    y = y0;

    for (x = x0; x <= x1; x++) {
        draw(x, parseInt(Math.floor(y + 0.5)));
        y += m;
    }
}

const draw = (x, y) => {
    var canvas = document.getElementById('line');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + (a / 255) + ")";
    ctx.fillRect(x, y, 1, 1);
}

export { line };