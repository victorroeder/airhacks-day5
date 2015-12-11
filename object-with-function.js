

var airplane = {
    speed: 42,
    takeOff: function () {
        print(this.speed);
        var optional = arguments[0] || "nothing";
        print(optional);
    }
};

airplane.takeOff();

print(JSON.stringify(airplane));

for (var key in airplane) {
    print(key, airplane[key]);
}

print("unusual");
airplane["takeOff"]("hey");

