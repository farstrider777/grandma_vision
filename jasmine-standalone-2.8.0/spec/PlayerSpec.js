//import likeCounter from "../src/js/controllers/counter.js"
//require("../src/js/controllers/counter.js")

describe("first tests", function() {
  //console.log(likeCounter())
  var test;
  test = new Dog();
  it("should pass simple test", function() {
    expect(test.says).toEqual('life is ruff');
  })
})

describe("test creation of fully featured grandma", function() {
  var dot;
  dot = new Grandma("dot", "www.bridge.com", "www.email.com");
  it("should create a Grandma with all 3 properties", function() {
    expect(dot.name).toEqual('dot');
    expect(dot.link1).toEqual('www.bridge.com', 'www.email.com');
  })
});

////////////

describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
