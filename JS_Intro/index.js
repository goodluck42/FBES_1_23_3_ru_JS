// console.log(x);
// var x;

// let x, y = [42, 13];
// const CONST_VALUE = 13;
//
// // x = "hello world";
//
// console.log(x);
//
//
// // Data types
//
// let str = "this is string";
// let interpolatedStr = `Interpolated: ${str}`;
// let num = 42.13;
// let pInf = Infinity;
// let nInf = -Infinity;
// let nan = NaN; // Not a Number
// console.log(nan != nan);
// console.log(isNaN(nan));
//
// let b = true;
// let arr = [1, 2, 3];
// let obj = {
//     nValue: 42,
//     bValue: true,
//     "+-*/@$": "test"
// };
//
// obj.strValue = "Helloy";
// obj.nValue = 100;
//
// console.log(obj);
// console.log(obj.nValue);
// console.log(obj["+-*/@$"]);
// console.log(obj.nonExistentProp);
// console.log(void 0);
// console.log(undefined);
//
// let objArray = {
//     0: "val1",
//     1: "val2",
//     2: "val3",
//     3: "val4",
//     length: 4
// };
//
// Array.prototype.push.call(objArray, "val5");
//
// console.log(objArray);

// Typecasting

// number to string
// let number = 42;
// let numberToString = number.toString(); // Good
// let numberToString2 = String(number);
// let numberToString3 = number + "";
//
// console.log(typeof numberToString, numberToString);
// console.log(typeof numberToString2, numberToString2);
// console.log(typeof numberToString3, numberToString3);
//
//
// let string = "42.3";
// let stringToNumber = parseInt(string); // Good
// let stringToNumber2_1 = parseFloat(string); // Good
// let stringToNumber2 = Number(string);
// let stringToNumber3 = string * 1;
//
// console.log(typeof stringToNumber, stringToNumber);
// console.log(typeof stringToNumber2_1, stringToNumber2_1);
// console.log(typeof stringToNumber2, stringToNumber2);
// console.log(typeof stringToNumber3, stringToNumber3);
//
// // n to boolean
//
// let val = 42;
// let valToBoolean = !!val;
// let valToBoolean2 = Boolean(val);
//
// console.log(typeof valToBoolean, valToBoolean);
// console.log(typeof valToBoolean2, valToBoolean2);
// console.log(!!1);
// console.log(!!0);
// console.log(!!"");
// console.log(!!" ");
// console.log(!![]);
// console.log(!!{});
// console.log(!!undefined);
// console.log(!!null);
// console.log(!!NaN);
// console.log(!!Infinity);
// console.log(!!-Infinity);

// typeof operator

// console.log("typeof 4.2:", typeof 4.2);
// console.log("typeof \"\":", typeof "");
// console.log("typeof []:", typeof []);
// console.log("Array.isArray([]):", Array.isArray([]));
// console.log("typeof {}:", typeof {});
// console.log("typeof null:", typeof null);
// console.log("typeof undefined:", typeof undefined);
// console.log("typeof NaN:", typeof NaN);
// console.log("typeof Infinity:", typeof Infinity);
// console.log("typeof -Infinity:", typeof -Infinity);
// console.log("typeof true:", typeof true);
// console.log("typeof (() => {}): ", typeof (() => {}));


// Operators

// +, -, /, *, %, **
// |, &, ^, ~
// ||, &&, !

// +, -=, ...
// ==, === (strict equality)

// ifelse, switch

// let a = 1;
// let b = "1";
//
// if (a === b)
// {
//     console.log("equals");
// }
// else if (a > b)
// {
//     console.log("more");
// }
// else
// {
//     console.log("less");
// }
//
// switch (a)
// {
//     case 0:
//     case 1:
//     {
//         console.log("one");
//         break;
//     }
//
//     default:
//         break;
// }

// Loops

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// let i = 0;
//
// while (i < 5) {
//     console.log(i++);
// }
//
// i = 0;
//
// do {
//     console.log(i++);
// } while (i < 5);

// functions


const MyModule = (function () {
    let exports = {};
    let counter = 0;

    function myPrint(value) {
        foo();

        console.log(`${value} ${counter++}`);
    }

    function foo() {

    }

    isEven();

    function isEven(n) {
        return n % 2 === 0;
    }

    function isOdd(n) {
        return !isEven(n);
    }

    let func = isEven;

    func = isOdd;

    func();

    function printMany(a, b, c, ...rest) {
        console.log(`${a} ${b} ${c}`);

        for (let i = 0; i < rest.length; i++) {
            console.log(`rest: ${rest[i]}`);
        }
    }

    function showArgumentCount() {
        for (let i = 0; i < arguments.length; i++) {
            console.log(`argument: ${arguments[i]}`);
        }
    }

    let a = prompt();
    let b = prompt();

    alert(a + b);

    exports.print = myPrint;
    exports.printMany = printMany;
    exports.showArgumentCount = showArgumentCount;

    return exports;
})();