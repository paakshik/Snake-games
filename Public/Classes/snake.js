class Snake {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color1 = 'maroon';
        this.total = 0;
        this.tail = [];
        this.pos = 0;
        this.d = 0;
        this.form = '';
        this.high =  localStorage.getItem('High-Length');
    }
    death() {
        for (var i = 0; i < this.tail.length; i++) {
            this.pos = this.tail[i];
            this.d = dist(this.x, this.y, this.pos.x, this.pos.y);
            if (this.d < 1) {
if (this.high < this.total){
                localStorage.setItem('High-Length',this.total)
}
                this.tail = [];
                this.total = 0;
              
                gameState = 0;
                this.form = new Form();
                this.form.display();
                XP = 0;
                snake.total = 0;
this.x = 200;
this.y = 200;
                for (var i = -40; i < 2000; i++) {
                    starsA[i] = new Star(random(-5000, +5000), random(-5000, 5000), 10)
                }
                for (var i = -40; i < 200; i++) {
                    potionB[i] = new Potion(random(-5000, +5000), random(-5000, 5000), 30, 30, potion2)
                }
            }

        }
    }
    constrain(){
    this.x = constrain(this.x,-width,width)
     this.y = constrain(this.y,-height,height)
    }
    update() {
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.total - 1] = {
            x: this.x,
            y: this.y
        };
    }
    draw() {

        fill(this.color1)
        noStroke();
        for (var i = 0; i < this.tail.length; i++) {
            ellipse(this.tail[i].x, this.tail[i].y, this.r)
        }
        ellipse(this.x, this.y, this.r)

    }
    increaseR(r) {
        this.r = r;
    }
    coords(x, y) {
        this.x = x;
        this.y = y;
    }
    collider(body) {
        if (dist(this.x, this.y, body.x, body.y) < this.r) {

            return true;
        }
    }
}