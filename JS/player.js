class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", (data)=>{
            playerCount = data.val();
        });
    }

    updateCount(count){
        var playerCountRef = database.ref("/");
        playerCountRef.update({
            playerCount : count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;        //players/player1
        var playerInfoRef = database.ref(playerIndex);
        playerInfoRef.set({
            name: this.name,
            distance: this.distance
        });
    }


    static getPlayerInfo(){ 
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
}