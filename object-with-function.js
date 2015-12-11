

var airplane = {
    speed: 42,
    takeOff: function () {
        print(this.speed);
        var optional = arguments[0];
        if (optional)
            print(optional);
        else
            print("nothing");
    }
};

airplane.takeOff();

print(JSON.stringify(airplane));

for (var key in airplane) {
    print(key, airplane[key]);
}

print("unusual");
airplane["takeOff"]("hey");

