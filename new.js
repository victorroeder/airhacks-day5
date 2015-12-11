//'use strict'
var visibleInFunction = "kkk";

function hey(input) {
    var msg = "hello world";
    this.name = input;
    print(this.name);
    if (msg) {
        var anotherMessage = "hey in if";
    }
    print(anotherMessage);
}

//hey("joe");


var another = new hey("joe");
print(another.name);
print(hey.msg);