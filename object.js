'use strict'

var first = {
    hugo: 'duke',
    age: 20
};

var serialized = JSON.stringify(first);
print(serialized);
var copy = JSON.parse(serialized);

print(first === copy);


copy.description = "new field";
print(JSON.stringify(copy));


var shiny = {};

shiny.firstName = "hey";
shiny.lastName = "message";

Object.freeze(shiny); // immutable state

shiny.lastName = "adf";

Object.seal(shine); // immutable structure


