
function hello(a, b) {
    print(a + b);
}

var args = ['hello', ' world'];
hello.apply({}, args);


hello.call(null, "hey", " joe");

hello(2, 3);


var servant = {
    invoke: function (input) {
        print(input);
    }
};

var rpc = "invoke";
var parameter = "joe from server";

servant[rpc].call({}, parameter);


