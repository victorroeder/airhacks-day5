Array.prototype.dump = function () {
    for (var element in this) {
        print(element, this[element]);
    }
};

var custom = ['1', 2, "three"];

custom.dumper = function () {
    print("something");
};

custom.dumper();
custom.dump();

