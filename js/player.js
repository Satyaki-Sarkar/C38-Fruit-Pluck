class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    getScore(){
        database.ref('/').on("value",function(data){
            player1Score = data.val();
        });
        database.ref('/').on("value",function(data){
            player2Score = data.val();
        });
    }
    

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    updateScore(score,indexValue){
        if(indexValue===1){
            database.ref('/').update({
                player1Score: score
            });
        }else if(indexValue===2){
            database.ref('/').update({
                player2Score: score
            });
        }
        
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
