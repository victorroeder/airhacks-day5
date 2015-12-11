
var Airplane = function (s) {
    this.speed = s;
};

Airplane.prototype.takeOff = function () {
    print("Take off " + this.speed);
};


var one = new Airplane(42);
var two = new Airplane(300);
one.takeOff();
two.takeOff();



