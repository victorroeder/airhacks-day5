load("io.js");

var list = [{name: "a"}, {name: "b"}];
for (var i = 0; i < list.length; i++) {
    console.log(list[i].name);
}

list["developer"] = "duke";

list[42] = "the answer";
list['41'] = "interesting"; //strange coercion

print("-----");
for (var element in list) {
    console.log(element, list[element]);
}



