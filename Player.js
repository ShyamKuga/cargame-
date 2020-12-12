class Player{
    constructor(){
this.index = null
this.distance = 0
this.name = null
    }
    getCount(){
        var count1 = database.ref("playerCount")
        count1.on("value", function(data){
           playerCount = data.val()
        })
    }

    update(count){ 
        database.ref("/").update({
            playerCount:count
        })
        }

        nameUp(){
            var index = "players/player"+this.index
            database.ref(index).set({
                name:this.name, 
                distance:this.distance 
            })
        
        }
        static getPlayerInfo(){
            var playerinfo = database.ref("players")
            playerinfo.on("value", (data)=>{
                allPLayers= data.val()
            })

        }
    }