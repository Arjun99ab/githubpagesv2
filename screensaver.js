var canvas = document.getElementById("canvas");
canvas.width = $(window).width();
canvas.height = $(window).height()-6;
var ctx = canvas.getContext("2d");


var Nunito = new FontFace('Nunito', 'url(Nunito-VariableFont_wght.ttf)');

Nunito.load().then(function(font) {
    document.fonts.add(font);

    console.log('nunito loaded');
});


var mouseX, mouseY;
document.body.addEventListener("mousemove", (event)=>{
  mouseX = event.clientX;
  mouseY = event.clientY;
});

var Square = function () {
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 100;
    this.xSpeed = 2.5;
    this.ySpeed = 2.5;
}

Square.prototype.draw = function () {
    ctx.fillRect(this.x, this.y, this.width, this.height)
}

Square.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
}

Square.prototype.checkCollision = function () {
    if(this.x < 0 || this.x > canvas.width - this.width) {
        this.xSpeed = -this.xSpeed;
        ctx.fillStyle = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    if(this.y < 0 || this.y > canvas.height - this.height) {
        this.ySpeed = -this.ySpeed;
        ctx.fillStyle = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    document.onmouseup = function() {
        if((mouseX > square.x && mouseX < square.x + square.width) && (mouseY > square.y && mouseY < square.y + square.height)) {
            window.location.href = "index.html";
        }
    }

}



var square = new Square();

setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    square.draw();
    square.move();
    square.checkCollision();

    ctx.font = "bold 32px Nunito";
	ctx.textAlign = "center"; 
	ctx.fillText("Click on the square to return home!", canvas.width/2, 35);

    
    
}, 15);