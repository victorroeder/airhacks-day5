

var airplane = {
    speed: 42,
    takeOff: function () {
        print(this.speed);
    }
};

airplane.takeOff();

print(JSON.stringify(airplane));

for (var key in airplane) {
    print(key, airplane[key]);
}

