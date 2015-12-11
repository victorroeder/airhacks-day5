

function shaky() {
    throw new Error('very unstable');
}

function strange() {
    throw "hey joe";

}


try {
    shaky();
} catch (e) {
    print(typeof e);
    print(e);
}

try {
    strange();
} catch (e) {
    print(typeof e);
    print(e);
}