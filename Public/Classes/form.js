class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.title = createElement('h2');
this.highScore = createElement('h3');
        this.font1 = loadFont('Images/NotoSansDisplay-VariableFont_wdth,wght.ttf')
    }
    hide() {
        this.highScore.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {

        this.title.html("slither.io");
        this.title.position(window.width / 2 -180, 100);
        this.title.style('font-size', '90px');
        this.title.style('font-family', 'Nanum Gothic');
        this.title.style('font-style','normal')
        this.title.style('color', 'yellowgreen');
        
        this.highScore.html('Highest-Length: ' + localStorage.getItem('High-Length'));
        this.highScore.position(300, 300);
        this.highScore.style('color','grey')
        this.highScore.style('font-family', 'Nanum Gothic');

        this.highScore.style('color', 'white');
        this.input.position(280, 400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('text-align', 'center')
        this.input.style('background', 'lavender');
        this.button.position(290, 500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightgreen');
        // this.reset.position(900, 660);
        // this.reset.style('width', '100px');
        // this.reset.style('height', '30px');
        // this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {

            this.input.hide();
            this.title.hide();
            this.button.hide();
            this.highScore.hide();
            console.log(true)
            gameState = '1';
            player_name = this.input.value();
            playerCount += 1;

            //     player.index = playerCount;

            //     player.updateCount(playerCount);
            //     player.updateIndex(player.index)

        });

        // this.reset.mousePressed(() => {
        //     //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
        //   database.ref('/').update({
        //       gameState:0,
        //       playerCount:0
        //   }) 
        //   database.ref('player'+index).update({
        //       score :0
        //   }) 
        // });

    }
}