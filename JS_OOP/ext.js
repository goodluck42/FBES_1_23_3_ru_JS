Array.prototype.keys = Array.prototype.keys || function () {
    let x = Object.getOwnPropertyNames(this);

    return x;
};

Array.prototype.print = function () {
    for (let value of this) {
        console.log(value);
    }
};

// Array, String, Map, Function, Object
// let x = {};
//
// Object.defineProperty(x, "MyProp", {
//     value: 42,
//     writable: false,
//     configurable: false,
//     get: function ()
//     {
//
//     },
//     set: function ()
//     {
//
//     }
// });
//
// Object.defineProperty(x, "MyProp", {
//     writable: true
// });
// x.MyProp = 10;
//
// console.log(x);


let arr = [1, 2, 3, 4];

let res = arr.map(value => {
   return value * 2;
});

console.log(res);

let sum = arr.reduce((prev, current) => {
    return prev + current;
});

let atMethod = Array.prototype.at;

Array.prototype.at = function (index) {
    if (index >= this.length)
    {
        throw new Error("OutOfRange");
    }

    return atMethod.apply(this, arguments);
};

console.log(sum);
console.log(res.at(99));
console.log(res[99]);