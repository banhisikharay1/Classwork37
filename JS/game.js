/*class Game{
    constructor(){

    }


    /*getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", (data)=>{
            gameState = data.val();
            console.log("Game: data"+data.val())
        });
       
        console.log("game: state" + gameState)
    }


    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>{
          gameState = data.val();
        });
        //console.log(data.val())
      }

    updateState(state){
        var gameStateRef = database.ref("/");
        gameStateRef.update({
            gameState : state
        });
    }

    start(){
        if (gameState === 0){
            player = new Player();

            player.getCount();

            form = new Form();
            form.display();
        }
        
    }

    play(){

    }
}*/




class Game {
    constructor(){}

    getState(){
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value",(data)=>{
        gameState = data.val();
      });
    }
    
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
     start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
      }
    }
  
    play(){
      form.hide_details();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        var display_position = 130;
        for(var plr in allPlayers){
          if (plr === "player" + player.index)
            fill("red")
          else
            fill("black");
  
            display_position+=20;
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }

      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
    }
  } 