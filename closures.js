

function airplane(name) {
    return function () {
        print(name);
    };
}


var air = airplane('airbus');

print(typeof air);
air();




