var airplane = {
    speed: 42
};

var rocket = {
    speed: 100
};

function display() {
    print(this.speed);
}


var bound = display.bind(airplane);
bound();

var rocketSpeed = display.bind(rocket);
rocketSpeed();



var theNew = display.bind({});
theNew();
