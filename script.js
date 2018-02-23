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
var y = 250
var x2=x2
var y2 = canvas.height - 30;
var ballRadius = 10
var e1=document.getElementById("e1")
var a=1000 // enemy xstart
var n=100 // enemy y start



function moveEnemy(){
    a-=0.01
}







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


function draw1Enemy(ey) { //ey - enemy starting position
  
    ctx.beginPath();
    setInterval(moveEnemy, 100)
    ctx.drawImage(e1, a, ey, 70, 70);
    ctx.closePath()
}

function drawEnemyWave1(){
    ey=-90
    for (i=0; i<6; i++){
    ey+=100
        draw1Enemy(ey)
    }
}

function drawEnemyWave2(){
    ctx.beginPath();
    setInterval(moveEnemy, 100)
    ctx.drawImage(e1, a, ey, 70, 70);
    ctx.closePath()

}

function drawEnemy(){
    drawEnemyWave1();
   setTimeout(drawEnemyWave2, 5000);
}


function draw() {
    ctx.fillStyle = "black";
    canvas.width = 1100;
    canvas.height = 600;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    drawShip();
    drawEnemy();
   


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
   

} //end of draw

setInterval(moveEnemy, 10)
setInterval(draw, 10)
