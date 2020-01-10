import { Point } from './Point'

var drawField = document.querySelector("#draw-field");
let r = 253, g = 216, b = 53

let points = [];

drawField.addEventListener("click", event => {

    let x = event.clientX - drawField.getBoundingClientRect().left
    let y = event.clientY - drawField.getBoundingClientRect().top

    let point = new Point(x, y);

    if (points.length == 0) {
        points.push(point);
    } else if (points.length == 1) {
        points.push(point);
        drawLine(points);
        g -= 10;
    } else if (points.length == 2) {
        points = [];
        points.push(point);
    }
});

const drawLine = (points) => {

    let x1 = points[0].x;
    let y1 = points[0].y;
    let x2 = points[1].x;
    let y2 = points[1].y;
    // zmienne pomocnicze
    let d, dx, dy, ai, bi, xi, yi;
    let x = x1, y = y1;
    // ustalenie kierunku rysowania
    if (x1 < x2) {
        xi = 1;
        dx = x2 - x1;
    } else {
        xi = -1;
        dx = x1 - x2;
    }
    // ustalenie kierunku rysowania
    if (y1 < y2) {
        yi = 1;
        dy = y2 - y1;
    } else {
        yi = -1;
        dy = y1 - y2;
    }
    drawPoint(x, y);
    // oś wiodąca OX
    if (dx > dy) {
        ai = (dy - dx) * 2;
        bi = dy * 2;
        d = bi - dx;
        // pętla po kolejnych x
        while (x != x2) {
            // test współczynnika
            if (d >= 0) {
                x += xi;
                y += yi;
                d += ai;
            } else {
                d += bi;
                x += xi;
            }
            drawPoint(x, y);
        }
    }
    // oś wiodąca OY
    else {
        ai = (dx - dy) * 2;
        bi = dx * 2;
        d = bi - dy;
        // pętla po kolejnych y
        while (y != y2) {
            // test współczynnika
            if (d >= 0) {
                x += xi;
                y += yi;
                d += ai;
            } else {
                d += bi;
                y += yi;
            }
            drawPoint(x, y);
        }
    }
}

const drawPoint = (x, y) => {
    var canvas = document.getElementById('line');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
    ctx.fillRect(x, y, 1, 1);
}

export { drawLine };