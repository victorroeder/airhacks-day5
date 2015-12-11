var nbr = Number('123');
print(typeof nbr)

var result = 42 - "1";
print(result);

var something = Boolean("true");
if (something === true) {
    print("Is true");
}

if (Boolean(1))
    print("1 is true");

if (!Boolean(0))
    print("0 is not true");

if ({})
    print("Object is true");

if (!!"true")
    print("JS hackers is true");


if (true === "1") {
    print("== with coercion");
}

if (NaN === NaN) {

} else {
    print("Nan is not NaN");
}


print(parseFloat("123.123adf"));


