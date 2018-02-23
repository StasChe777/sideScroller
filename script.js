var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var spaceShip = document.getElementById("spaceShip");
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;
var upPressed = false;
var downPressed = false;
var moveLeft = false; 
var moveRight = false;
var moveUp = false;
var moveDown = false;
var x = 15
var y = 250
var x2 = x2
var y2 = canvas.height - 30;

var ballRadius = 10

var bulletCount = 0
var bulletActive = false;








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
    ctx.drawImage(spaceShip, x, y, 70, 70);
    ctx.closePath();
}



function drawBullet() {
    if (bulletActive == false) {
        ctx.beginPath();
        ctx.rect(x2, y2 - 25, 15, 1);
        ctx.fillStyle = "green"
        ctx.strokeStyle = "green"
        ctx.fill();
        ctx.stroke();
        ctx.closePath;
        bulletCount++
       
        if (x2 < 0) {
            spacePressed = false;
            x2 = canvas.height - 700;
            bulletCount = 0
        }
       
    }
}


function draw() {
    ctx.fillStyle = "Black";
    canvas.width = 1100;
    canvas.height = 600;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
   
    drawShip();
   


    // stops ball moving too far
    if (rightPressed && x < canvas.width - ballRadius || rightPressed && x < ballRadius) {
        x += 3;
    } else if (leftPressed && x > 0 + ballRadius || leftPressed && x > ballRadius) {
        x -= 3;
    }
    else if (downPressed && x < canvas.width - ballRadius || downPressed && x < ballRadius) {
        y += 3;
    } else if (upPressed && x > 0 + ballRadius || upPressed && x > ballRadius) {
        y -= 3;
    }




    //During firing
    if (spacePressed) {
        if (bulletCount === 0 ) { //Take the first x position of the ship at fire
        x2 = x + 38 ;
        y2 = y + 40;
     
        }
        x2 -= -15; //bullet will travel up the screen
        
        drawBullet();
    }

    
} //end of draw





setInterval(draw, 10)