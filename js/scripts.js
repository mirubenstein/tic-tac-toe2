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
  initialize: function(xCoordinate, yCoordinate){
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    // this.markedBy = "";
  },
  create: function(xCoordinate, yCoordinate){
    var newSpace = Object.create(Space);
    newSpace.initialize(xCoordinate, yCoordinate);
    return newSpace;
  },
  markBy: function(player){
    this.markedBy = player.symbol;
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
  },
  create: function() {
    var newBoard = Object.create(Board);
    newBoard.initialize();
    return newBoard;
  },
  find: function(xCoordinate, yCoordinate){
    var foundSpace;
    this.spaces.forEach(function(space){
      if (space.xCoordinate === xCoordinate && space.yCoordinate === yCoordinate){
        foundSpace = space;
      }
    });
    return foundSpace
  },
  win: function(playerSymbol){
    var playerWon = false;
    for (var i = 1; i < 4; i++){
      if( playerSymbol === this.find(i,1).markedBy &&
          this.find(i,1).markedBy === this.find(i,2).markedBy &&
          this.find(i,1).markedBy === this.find(i,3).markedBy) {
        playerWon = true;
      }
    }
    for (var i = 1; i < 4; i++){
      if( playerSymbol === this.find(1, i).markedBy &&
          this.find(1, i).markedBy === this.find(2, i).markedBy &&
          this.find(1, i).markedBy === this.find(3, i).markedBy) {
        playerWon = true;
      }
    }
    if (playerSymbol === this.find(1,1).markedBy &&
        this.find(1,1).markedBy === this.find(2,2).markedBy &&
        this.find(1,1).markedBy === this.find(3,3).markedBy){
      playerWon = true;
    }
    if (playerSymbol === this.find(1,3).markedBy &&
        this.find(1,3).markedBy === this.find(2,2).markedBy &&
        this.find(1,3).markedBy === this.find(3,1).markedBy){
      playerWon = true;
    }
    return playerWon;
  }
};

var Game = {
  initialize: function() {
    this.turn = 1;
    this.player1 = Player.create("X");
    this.player2 = Player.create("O");
    this.board = Board.create();
    this.currentPlayer = this.player1;
  },
  create: function(){
    var newGame = Object.create(Game);
    newGame.initialize();
    return newGame;
  },
  turnIncrement: function(){
    this.turn++;
    if (this.turn === 10){
      alert("It's a draw!");
    }
    if (this.turn % 2 === 0){
      this.currentPlayer = this.player2;
    }
    else {
      this.currentPlayer = this.player1;
    }
  }
}

$(document).ready(function(){
  var currentGame = Game.create();
  $("#square-zero").click(function(){
    currentGame.board.spaces[0].markBy(currentGame.currentPlayer);
    if(currentGame.board.win(currentGame.currentPlayer.symbol)){
      alert(currentGame.currentPlayer.symbol + " WINS THE GAME!");
    }
    $("#space-zero").text(currentGame.currentPlayer.symbol);
    currentGame.turnIncrement();
  });
  $("#square-one").click(function(){
    currentGame.board.spaces[1].markBy(currentGame.currentPlayer);
    if(currentGame.board.win(currentGame.currentPlayer.symbol)){
      alert(currentGame.currentPlayer.symbol + " WINS THE GAME!");
    }
    $("#space-one").text(currentGame.currentPlayer.symbol);
    currentGame.turnIncrement();
  });
  $("#square-two").click(function(){
    currentGame.board.spaces[2].markBy(currentGame.currentPlayer);
    if(currentGame.board.win(currentGame.currentPlayer.symbol)){
      alert(currentGame.currentPlayer.symbol + " WINS THE GAME!");
    }
    $("#space-two").text(currentGame.currentPlayer.symbol);
    currentGame.turnIncrement();
  });
  $("#square-three").click(function(){
    currentGame.board.spaces[3].markBy(currentGame.currentPlayer);
    if(currentGame.board.win(currentGame.currentPlayer.symbol)){
      alert(currentGame.currentPlayer.symbol + " WINS THE GAME!");
    }
    $("#space-three").text(currentGame.currentPlayer.symbol);
    currentGame.turnIncrement();
  });
  $("#square-four").click(function(){
    currentGame.board.spaces[4].markBy(currentGame.currentPlayer);
    if(currentGame.board.win(currentGame.currentPlayer.symbol)){
      alert(currentGame.currentPlayer.symbol + " WINS THE GAME!");
    }
    $("#space-four").text(currentGame.currentPlayer.symbol);
    currentGame.turnIncrement();
  });
  $("#square-five").click(function(){
    currentGame.board.spaces[5].markBy(currentGame.currentPlayer);
    if(currentGame.board.win(currentGame.currentPlayer.symbol)){
      alert(currentGame.currentPlayer.symbol + " WINS THE GAME!");
    }
    $("#space-five").text(currentGame.currentPlayer.symbol);
    currentGame.turnIncrement();
  });
  $("#square-six").click(function(){
    currentGame.board.spaces[6].markBy(currentGame.currentPlayer);
    if(currentGame.board.win(currentGame.currentPlayer.symbol)){
      alert(currentGame.currentPlayer.symbol + " WINS THE GAME!");
    }
    $("#space-six").text(currentGame.currentPlayer.symbol);
    currentGame.turnIncrement();
  });
  $("#square-seven").click(function(){
    currentGame.board.spaces[7].markBy(currentGame.currentPlayer);
    if(currentGame.board.win(currentGame.currentPlayer.symbol)){
      alert(currentGame.currentPlayer.symbol + " WINS THE GAME!");
    }
    $("#space-seven").text(currentGame.currentPlayer.symbol);
    currentGame.turnIncrement();
  });
  $("#square-eight").click(function(){
    currentGame.board.spaces[8].markBy(currentGame.currentPlayer);
    if(currentGame.board.win(currentGame.currentPlayer.symbol)){
      alert(currentGame.currentPlayer.symbol + " WINS THE GAME!");
    }
    $("#space-eight").text(currentGame.currentPlayer.symbol);
    currentGame.turnIncrement();
  });

});
