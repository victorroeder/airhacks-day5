'use strict'
var visibleInFunction = "kkk";


var experiment = {
    name: (this.hello = "hey from object")
}


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
print(hey.name);
print(typeof hey);
print(hey.toString())

print(experiment.name);
print(hello);