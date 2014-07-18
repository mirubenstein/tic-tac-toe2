var Player = {
  initialize: function(symbol){
    this.symbol = symbol;
  },
  create: function(symbol){
    var newPlayer = Object.create(Player)
    newPlayer.initialize(symbol);
    return newPlayer;
  }
};

var Space = {
  initialize: function(xCoord, yCoord){
    this.xCoordinate = xCoord;
    this.yCoordinate = yCoord;
  },
  create: function(xCoord, yCoord){
    var newSpace = Object.create(Space);
    newSpace.initialize(xCoord, yCoord);
    return newSpace;
  },
  markBy: function(playerMarking){
    this.markedBy = playerMarking;
  }
  find: function(xCoord, yCoord){

  }
};

var Board = {
  initialize: function(){
    this.spaces = [];
    for (var i = 1; i < 4; i++){
      for (var j = 1; j < 4; j++){
        this.spaces.push(Space.create(i,j));
      }
    }
  }
};
