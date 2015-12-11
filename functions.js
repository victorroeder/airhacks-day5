

function firstOne() {
    print("hey joe");
}

firstOne();


var nextOne = function () {
    return 'returning joe';
};

print(nextOne());


function withParameters(a) {
    print("Parameters ${arguments.length}"); // just nashorn
    print(a);
}


withParameters();
withParameters(2, 3);