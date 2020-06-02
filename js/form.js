class Form{
    constructor(){
     this.input = createInput("");
     this.play = createButton("Play");
     this.title = createElement('h1');
     this.greeting = createElement('h2');
     this.reset = createButton("Reset");
    }

    hide(){
        this.input.hide();
        this.play.hide();
        this.title.hide();
        this.greeting.hide();
    }

    display(){

        this.title.html("Enter your name to get started!");
        this.title.position(displayWidth/2-300, 0);

        this.input.position(displayWidth/2 - 150 , displayHeight/2 - 80);

        this.play.position(displayWidth/2 - 200 , displayHeight/2 - 80);

     
        this.play.mousePressed(()=>{
            this.input.hide();
            this.play.hide();

            this.reset.position(displayWidth/2 + 400 , displayHeight/2 - 330);

            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Welcome " + player.name)
            this.greeting.position(displayWidth/2 -150, displayHeight/2 -90);
          });

          this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
          });
      
    }





















}