/*class Form {
    constructor(){
        this.title = createElement('h2');
        
        this.input = createInput("Name");
        this.button = createButton('Play');
        
        this.greeting = createElement('h2');
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 - 50, 0);

        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();

            this.greeting.html("Hello " + this.input.value());
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);

        });
    }
}*/




class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
    }
    hide_details(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html("Hello " + player.name + " " + player.index)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    } 
  }