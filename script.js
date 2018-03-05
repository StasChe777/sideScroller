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
var moveUp=false;
var moveDown=false;
var x = 15;
var y = 250;
var x2=x2;
var y2 = canvas.height - 30;
var ballRadius = 10;
var e1=document.getElementById("e1")
var e2=document.getElementById("e2")
var e3=document.getElementById("e3")
var e4=document.getElementById("e4")
var e5=document.getElementById("e5")
var e6=document.getElementById("e6")
var e7=document.getElementById("e7")
var e8=document.getElementById("e8")
var e9=document.getElementById("e9")
var e10=document.getElementById("e10")
var a=1000 // enemy xstart
var n=100 // enemy y start
var en=e1


function moveEnemy(){
    a-=0.01
}







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
        bulletActive = true;
    } 
}





function drawShip() {
    ctx.beginPath();
    ctx.drawImage(spaceShip, x, y, 70, 70);
    ctx.closePath();
    
}


function draw1Enemy(ey, en) { //ey - enemy starting position
   
    ctx.beginPath();
    setInterval(moveEnemy, 100);
    ctx.drawImage(en, a, ey, 70, 70);
    ctx.closePath();
 
}

function drawEnemyWave1(){
    ey=-90
    for (i=0; i<6; i++){
    ey+=100
        draw1Enemy(ey, en)
    }
}

function drawEnemyWave2(){
    var a=1000 // enemy xstart
    var n=100
    console.log(a)
    ey=-90
    let en=e2
    for (i=0; i<6; i++){
    ey+=100
    console.log(en)
        drawEnemyWave1(ey, en)
    }
    return a
    return n
}

function w3(){
    setInterval(drawEnemyWave2, 5000)
}

function drawEnemy(){
    drawEnemyWave1();
    setInterval(drawEnemyWave1, 9000);
}

    function drawBullet() {
    if (bulletActive == true) {
        ctx.beginPath();
        ctx.rect(x2 + 10, y2 - 5, 30, 2);
        ctx.fillStyle = "green"
        ctx.strokeStyle = "green"
        ctx.fill();
        ctx.stroke();
        ctx.closePath;
        bulletCount++
    }
        if (x2 < 0) {
           bulletActive = false;
            spacePressed = false;
            bulletCount = 0
       }
    }

function draw() {
    ctx.fillStyle = "Black";
    canvas.width = 1100;
    canvas.height = 600;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
   
    drawShip();

    if (rightPressed && x < canvas.width - ballRadius || rightPressed && x < ballRadius) {
        x += 4;
    } else if (leftPressed && x > 0 + ballRadius || leftPressed && x > ballRadius) {
        x -= 4;
    }
    else if (downPressed && x < canvas.width - ballRadius || downPressed && x < ballRadius) {
        y += 4;
    } else if (upPressed && x > 0 + ballRadius || upPressed && x > ballRadius) {
        y -= 4;
    }

    //During firing

    if (spaceBarHandler) {
        if (bulletCount === 0) { //Take the first x position of the ship at fire
        x2 = x + 38 ;
        y2 = y + 40;
        }

        x2 -= -12; //bullet will travel up the screen
        
    drawBullet();

    }
    


}


  

setInterval(draw, 10)
