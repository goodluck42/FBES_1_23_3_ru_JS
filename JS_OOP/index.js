"use strict";

// Array, String, Map, Object, Function

function Timer(interval, callback) {
    // this = {};
    if (this === undefined) {
        throw new Error("Call with 'new' operator");
    }

    if (typeof interval !== "number" || typeof callback !== "function") {
        throw new TypeError();
    }

    this._callback = callback;
    this._enabled = false;
    this._id = null; // private convention
    this._interval = interval;

    // this = {};

    // return this; // implicitly
}

Timer.prototype.start = function () {
    if (!this._enabled) {
        this._id = setInterval(this._callback, this._interval);
        this._enabled = true;
    }
};

Timer.prototype.stop = function () {
    if (this._enabled) {
        clearInterval(this._id);
        this._enabled = false;
        this._id = null;
    }
};


function DebugTimer(elementId, interval) {
    Timer.call(this, interval, () => {
        this._element.innerHTML = Date.now().toString();
    });

    this._element = document.getElementById(elementId);

    // return this; // implicitly
}

DebugTimer.prototype = Object.create(Timer.prototype, {
    constructor: {
        value: DebugTimer,
        enumerable: false,
        writable: false,
        configurable: false
    },
    debugStart: {
        value: function () {
            console.log("debug start");
            //return this.start();
            return Timer.prototype.start.apply(this, arguments);
        },
        enumerable: false,
        writable: false,
        configurable: false
    }
});

//     console.log(this, rest.length);
// }

// bind
// let wrapper = Timer.bind("myThis", 1, 2, 3);
// let wrapper2 = Timer.bind("myThis", ...[1, 2, 3]);
//
// wrapper();
// wrapper2();

// call
// Timer.call("myThis", 1, 2, 3);

// apply
// Timer.apply("myThis", [1, 2, 3]);


// (function (context){
//
//     if (context === null)
//     {
//         return;
//     }
//
// })(typeof window === 'object' ? window : (typeof global === "object" ? global : null));

// function overload
function add(a, b) {
    const aType = typeof a;
    const bType = typeof b;

    if (aType === "number" && bType === "number") {
        return add.overloads[aType](a, b);
    }

    if (aType === "string" && bType === "string") {
        return add.overloads[aType](a, b);
    }

    throw new TypeError("Invalid types");
}

add.overloads = {
    [typeof 0]: function (a, b) {
        console.log("number overload");

        return a + b;
    },
    [typeof ""]: function (a, b) {
        console.log("string overload");

        return a + b;
    }
};