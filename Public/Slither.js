var starsG;
var starsA = [];
var potionB = [];

var socket;

var posX = 0;
var posY = 0;

var gameState = 0;

var XP = 0;
var snake;
var r = 20;
var zoom = 64 / r;
var player_name = '';
var playerCount = 0;
var snakes = [];
//leaderboard
// multiplayer
// game over detection

function preload() {
    back = loadImage('Images/download.jpg')
    logo = loadImage('Images/png-transparent-slither-io-snake-video-game-app-store-snake-game-animals-computer-wallpaper-removebg-preview.png')
    potion2 = loadImage('Images/image.png')
}

function setup() {
    createCanvas(800, 800);

    form = new Form()

    snake = new Snake(200, 200, r);
    socket = io.connect('http://localhost:3000/');
      var data = {
    x: snake.x,
    y: snake.y,
    r: snake.r
  };
  socket.emit('start', data);
    for (var i = -40; i < 2000; i++) {
        starsA[i] = new Star(random(-10000, +10000), random(-10000, 10000), 10)
    }
    for (var i = -40; i < 200; i++) {
        potionB[i] = new Potion(random(-10000, +10000), random(-10000, 10000), 30, 30, potion2)
    }
}

function draw() {
    if (gameState === 0) {
        form.display();
        background('black')
     
    }
    if (gameState === '1') {

socket.on('heartbeat', function(data) {
    //  console.log(data);

    snakes = data;
  });



        background(back)
        fill('white');
        textSize('200');
      //  snake.death();
        snake.update();
        snake.constrain();
        text(player_name, 20, 480);
        text('Your Length: ' + snake.total, 20, 500);
        text('Points: ' + XP, 20, 520)
        if (r < 144) {
            snake.increaseR(r)
        }
        snake.coords(posX, posY);
        translate(width/2, height/2)
        translate(-snake.x,-snake.y)
        if (r < 140) {
            zoom = 20 / r;
        }
        for (var i=snakes.length-1;i>=0;i--){
        if (snakes[i].id.substring() !== socket.id){
        ellipse(snakes[i].x,snakes[i].y,30)
        }
        }
        scale(zoom)

        snake.draw();
        starsA.forEach(star => {
            star.draw();
            if (snake.collider(star)) {

                var value = starsA.indexOf(star)
                starsA.splice(value, 1);
                snake.total++;
                // r = r + 10;

                XP = XP + 5;
            }
        })
        potionB.forEach(star => {
            star.draw();
            if (snake.collider(star)) {

                var value = potionB.indexOf(star)
                potionB.splice(value, 1);
                XP += 10;
            }
        })
        if (keyDown('RIGHT_ARROW')) {

            posX += 5;
        }
        if (keyDown('LEFT_ARROW')) {
            posX = posX - 5;
        }
        if (keyDown('UP_ARROW')) {

            posY -= 5;
        }
        if (keyDown('DOWN_ARROW')) {
            posY += 5;
        }

        if (XP > 0) {
            if (keyDown('a')) {

                posX += 20;
                XP = XP - 0.5;
            }
            if (keyDown('s')) {
                posX = posX - 20;
                XP = XP - 0.5;
            }
            if (keyDown('w')) {
                XP = XP - 0.5;
                posY -= 20;
            }
            if (keyDown('d')) {
                posY += 20;
                XP = XP - 0.5;
            }
            }
             var data = {
    x: snake.x,
    y: snake.y,
    r: snake.total
  };
  socket.emit('update', data);

        }
        drawSprites();
    }
