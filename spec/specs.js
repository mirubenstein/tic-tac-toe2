describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });

  describe("create", function() {
    it("creates a new Player object", function() {
      var testPlayer = Player.create("X");
      var testPlayer2 = Player.create("Y");
      Player.isPrototypeOf(testPlayer).should.equal(true);
      testPlayer.symbol.should.equal("X");
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });

  describe("create", function(){
    it("creates a new space object", function(){
      var testSpace = Space.create(1,2);
      Space.isPrototypeOf(testSpace).should.equal(true);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });

  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal("X");
    });
  });
});

describe("Board", function() {
  describe("initialize", function() {
    it("creates 9 spaces when it is initialized", function(){
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.spaces[0].xCoordinate.should.eql(1);
      testBoard.spaces[0].yCoordinate.should.eql(1);
    });
  });
  describe("creates", function() {
    it("creates a Board object", function(){
      var testBoard = Board.create();
      Board.isPrototypeOf(testBoard).should.equal(true);
      testBoard.spaces[4].xCoordinate.should.equal(2);
      testBoard.spaces[4].yCoordinate.should.equal(2);
    });
  });
  describe("find", function() {
    it("finds and returns a space object based on coordinates", function(){
      var testBoard = Board.create();
      testBoard.find(2,2).should.equal(testBoard.spaces[4]);
    });
  });
  describe("win", function() {
    it("ends game if three horizontal spaces are marked by the same symbol", function(){
      var testBoard = Board.create();
      var testPlayer = Player.create("X");
      testBoard.spaces[5].markBy(testPlayer);
      testBoard.spaces[4].markBy(testPlayer);
      testBoard.spaces[3].markBy(testPlayer);
      testBoard.win("X").should.equal(true);
    });
   });
  describe("win", function(){
    it("ends game if three vertical spaces are marked by the same symbol", function(){
      var testBoard = Board.create();
      var testPlayer = Player.create("X");
      testBoard.spaces[1].markBy(testPlayer);
      testBoard.spaces[4].markBy(testPlayer);
      testBoard.spaces[7].markBy(testPlayer);
      testBoard.win("X").should.equal(true);
    });
  });
  describe("win", function(){
    it("ends game if three diagonal spaces are marked by the same symbol", function(){
      var testBoard = Board.create();
      var testPlayer = Player.create("X");
      testBoard.spaces[0].markBy(testPlayer);
      testBoard.spaces[4].markBy(testPlayer);
      testBoard.spaces[8].markBy(testPlayer);
      testBoard.win("X").should.equal(true);
    });
  });
});

describe("Game", function(){
  describe("initialize", function(){
    it("initializes a new game with a clear board, 2 players, and sets turn to 1", function(){
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.player1.symbol.should.equal("X");
      testGame.board.spaces[0].xCoordinate.should.eql(1);
      testGame.turn.should.equal(1);
    });
  });
  describe("create", function(){
    it("create a new game object from Game prototype", function(){
      var testGame = Game.create();
      Game.isPrototypeOf(testGame).should.equal(true);
      testGame.player1.symbol.should.equal("X");
      testGame.board.spaces[0].xCoordinate.should.eql(1);
      testGame.turn.should.equal(1);
    });
  });
});
