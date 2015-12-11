'use strict'
if (!console) {
    var console = {
        log: function () {
            for (var i = 0; i < arguments.length; i++) {
                print("# " + arguments[i] + " ");
            }
        }
    };
}

