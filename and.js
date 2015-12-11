

var a = "42";
var result = "fourtytwo";

var translation = a && result && "you like chaining";
print(translation);


function checkCache() {
    print("checking");
    return "something";
}

function fetchCache() {
    print("Accessing");
    return "from cache";
}

var result = checkCache() && fetchCache();
print(result);

