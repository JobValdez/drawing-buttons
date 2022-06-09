const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
console.log("ctx", ctx);
let rect = canvas.getBoundingClientRect();

// BUTTONS
const UP = document.getElementById("up");
const DOWN = document.getElementById("down");
const LEFT = document.getElementById("left");
const RIGHT = document.getElementById("right");

let x = 0;
let y = 0;
let movement = 5;


canvas.addEventListener('mousedown', function(e){
    x=e.clientX - rect.left;
    y=e.clientY - rect.top;

    ctx.beginPath();
    // moveTo(x1, y1);
    ctx.moveTo(x, y);
    // lineTo(x2, y2);
    ctx.lineTo(x, y)

    ctx.lineWidth = 13;
    ctx.lineCap ="round";
    ctx.stroke();
    ctx.fill();
});

UP.addEventListener("click", function(){

    y = y - movement;

    ctx.beginPath();
    // moveTo(x1, y1);
    ctx.moveTo(x, y);
    // lineTo(x2, y2);
    ctx.lineTo(x, y);

    ctx.lineWidth = 13;
    ctx.lineCap ="round";
    ctx.stroke();
    ctx.fill();
});

DOWN.addEventListener("click", function(){

    y = y + movement;

    ctx.beginPath();
    // moveTo(x1, y1);
    ctx.moveTo(x, y);
    // lineTo(x2, y2);
    ctx.lineTo(x, y);

    ctx.lineWidth = 13;
    ctx.lineCap ="round";
    ctx.stroke();
    ctx.fill();
});

RIGHT.addEventListener("click", function(){

    x = x + movement;

    ctx.beginPath();
    // moveTo(x1, y1);
    ctx.moveTo(x, y );
    // lineTo(x2, y2);
    ctx.lineTo(x, y);

    ctx.lineWidth = 13;
    ctx.lineCap ="round";
    ctx.stroke();
    ctx.fill();
});


LEFT.addEventListener("click", function(){

    x = x - movement;

    ctx.beginPath();
    // moveTo(x1, y1);
    ctx.moveTo(x, y);
    // lineTo(x2, y2);
    ctx.lineTo(x, y);

    ctx.lineWidth = 13;
    ctx.lineCap ="round";
    ctx.stroke();
    ctx.fill();
});