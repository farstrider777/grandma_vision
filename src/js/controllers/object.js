class Dog {
  constructor(){
    this.says = 'life is ruff'
  }
}

class Grandma {
  constructor(name, link1, link2 ) {
    this.name = name;
    this.link1 = link1;
    this.link2 = link2;
  }
}

var Person = function() {
    //defaults
    var _age  =  0,
        _name = 'John Doe';

    this.initialize = function(name, age) {
      _name = name || _name;
      _age  = age  || _age;
    };
    if (arguments.length) this.initialize();

    //getters and setters
    this.getName     = function()      { return _name; };
    this.setName     = function (name) { alert("You called the real setName function"); _name = name; };

    //public methods
    this.addBirthday = function()      {  alert("You called the real addBirthday function"); _age++; };
    this.toString1    = function()      { return "My name is " + this.getName() + " and I am " + _age + " years old."; };
};
