Array.prototype.dump = function () {
    for (var element in this) {
        print(element, this[element]);
    }
};

['1', 2, "three"].dump();


