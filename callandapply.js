
function hello(a, b) {
    print(a + b);
}

var args = ['hello', ' world'];
hello.apply({}, args);


hello.call(null, "hey", " joe");