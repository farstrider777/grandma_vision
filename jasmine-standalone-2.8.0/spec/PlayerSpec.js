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

describe("test the toMatch matcher", function() {
  let message = "foobarbaz";
  it("should be able to use toMatch actual for regular expressions", () => {
    expect(message).toMatch("oo");
  })
});

describe("test the toContain matcher", () => {
  let testString = "my test string";
  it("should be able to get a substring", () => {
    expect(testString).toContain("my t")
  });
});

describe("test the toBeCloseTo matcher", () => {
  let a = 2.14
  let b = 2.1
  it("should be able to return true when 2 expressions that are close", () => {
    expect(a).toBeCloseTo(b, 1)
  });
});

describe("play with pending option", () => {
  it("this one will be pending");
  it("this one will be pending too", () => {
    expect(false).toBe(true);
    pending();
  })
});

describe("person to have been called test", () => {
  it("calls the getname method", () => {
    let testPerson = new Person();
    spyOn(testPerson, "getName");
    testPerson.toString1();
    expect(testPerson.getName).toHaveBeenCalled();
  });
});

// describe("person toString test with fake getname method", () => {
//   it("calls the fake getname method", () =>{
//     let testPerson = new Person();
//     testPerson.getName = jasmine.createSpy("getName spy");
//     console.log(testPerson.getName)
//     expect(testPerson.getName).toHaveBeenCalled();
//   });
// });

describe("Person toString() Test with Fake getName() Method", function() {
    it("calls the fake getName() function", function() {
        var testPerson = new Person();
        testPerson.getName = jasmine.createSpy("getName spy");
        testPerson.getName();
        expect(testPerson.getName).toHaveBeenCalled();
    });
});

describe("Person toString() Test with Fake getName() Method retry 2nd one", function() {
    it("calls the fake getName() function", function() {
        var testPerson = new Person();
        testPerson.getName = jasmine.createSpy("getName() spy");
        testPerson.toString1();
        testPerson.addBirthday = jasmine.createSpy("addBirthday() spy")
        testPerson.addBirthday();
        expect(testPerson.getName).toHaveBeenCalled();
    });
});

describe("Multiple spies, when created manually", function() {
  var tape;

  beforeEach(function() {
    tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

    tape.play();
    tape.pause();
    tape.rewind(0);
  });

  it("creates spies for each requested function", function() {
    expect(tape.play).toBeDefined();
    expect(tape.pause).toBeDefined();
    expect(tape.stop).toBeDefined();
    expect(tape.rewind).toBeDefined();
  });

  it("tracks that the spies were called", function() {
    expect(tape.play).toHaveBeenCalled();
    expect(tape.pause).toHaveBeenCalled();
    expect(tape.rewind).toHaveBeenCalled();
    expect(tape.stop).not.toHaveBeenCalled();
  });

  it("tracks all the arguments of its calls", function() {
    expect(tape.rewind).toHaveBeenCalledWith(0);
  });
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

////////////////
describe("it should not call the real method only the fake method", () => {
  it("should call but does it alert", () => {
    bill = new Person();
    //bill.setName("bill");
    fakeBill = jasmine.createSpyObj('fakeBill',['setName', 'setAddress']);
    fakeBill.setName();
    expect(fakeBill.setName).toHaveBeenCalled();
    //expect(true).toEqual(true);
    //expect(tape.rewind).toHaveBeenCalledWith(0)
  });
});

// beforeEach(() => {
//   console.log("hi there")
// });

describe("with callFake all calls to the spy will delegate to the supplied funtion", () => {
  it("should delegate calls", () => {
    fakeBill = jasmine.createSpyObj('fakeBill',['setName', 'setAddress']);
    fakeBill.setName();
    expect(fakeBill.setName).toHaveBeenCalled();
  })

});
