var console = {};
console.log = function () {};
load("io.js");
var airplane = {
    speed: 42,
    takeOff: function () {
        print(this.speed);
        var optional = arguments[0] || "nothing";
        console.log(optional);
    }
};

airplane.takeOff();

console.log(JSON.stringify(airplane));

for (var key in airplane) {
    console.log(key, airplane[key]);
}

console.log("unusual");
airplane["takeOff"]("hey");

airplane[42] = "chief joe";

for (var key in airplane) {
    console.log(key, airplane[key]);
}



