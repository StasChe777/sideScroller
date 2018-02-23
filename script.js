var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var spaceShip=document.getElementById("spaceShip");
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;
var upPressed = false;
var downPressed = false;
var moveLeft = false; 
var moveRight = false;
var moveUp=false;
var moveDown=false;
var x = 15
var y = canvas.height / 2
var x2=x2
var y2 = canvas.height - 30;
var ballRadius = 10




ctx.fillStyle = "black";
canvas.width = 1300;
canvas.height = 700;
ctx.fillRect(0, 0, canvas.width, canvas.height);




//var background = new Image();
//background.src = "img/sky.png";





    ctx.drawImage(spaceShip, 0, 300, 100, 100);
 


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", spaceBarHandler, false);


function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
    else if (e.keyCode==38){
        upPressed = true
    }
    else if (e.keyCode==40) {
        downPressed = true
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
    else if (e.keyCode==38){
        upPressed = false;
    }
    else if (e.keyCode==40) {
        downPressed = false;
    }
}


function spaceBarHandler(e) {
    if (e.keyCode == 32) {
        spacePressed = true;
        bulletActive = false;
    }
}


function drawShip() {

    ctx.beginPath();
    ctx.drawImage(spaceShip, x, y, 50, 50);
    ctx.closePath();
}




function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  
    drawShip();
   


    // stops ball moving too far
    if (rightPressed && x < canvas.width - ballRadius || rightPressed && x < ballRadius) {
        x += 3;
    } else if (leftPressed && x > 0 + ballRadius || leftPressed && x > ballRadius) {
        x -= 3;
    }


    //During firing
   

} //end of draw


setInterval(draw, 10)