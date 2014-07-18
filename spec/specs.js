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
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});

describe("Board", function() {
  it("creates 9 spaces when it is initialized", function(){
    var testBoard = Object.create(Board);
    testBoard.initialize();
    console.log(testBoard.spaces);
    testBoard.spaces[0].xCoordinate.should.eql(1);
    testBoard.spaces[0].yCoordinate.should.eql(1);
  }); // you write the rest!
});
