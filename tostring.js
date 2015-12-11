var airplane = {
    speed: 123,
    valueOf: function () {
        return 1234;
    },
    toString: function () {
        return this.speed;
    }
};

print(airplane);


print("some string" + airplane);

print("Number: " + Number(airplane));



var propably = {};

print(propably.valueOf());




