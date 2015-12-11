var result = function (e) {
    print(e);

};

var referenceToWhateverFunction = result;
referenceToWhateverFunction("joe");

function another(referenceToWhateverFunction) {
    referenceToWhateverFunction("d");
}



//--------------

function listener(callback) {
    callback("I'm done");
}


function callback(result) {
    print(result);
}


listener(callback);

