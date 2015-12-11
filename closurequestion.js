

function engines() {
    var functions = [];
    for (var i = 0; i < 10; i++) {
        functions.push(
                function () {
                    return (i);
                });

    }
    print("I is still visible here: " + i);
    return functions;
}


var result = engines();
for (var i = 0; i < 10; i++) {
    print(result[i]());
}



