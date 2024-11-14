"use strict";
//
let testString = "DoSomething(var1,var2,var3);";
let regex = /^([a-zA-Z_]\w*)\(([a-zA-Z_0-9\s]+,?)+\);?$/gmi;
let result = regex.test(testString);
console.log(regex.exec(testString));
console.log(`RESULT: ${result}`);
let matches = testString.match(regex);
console.log(matches);
console.log(matches.groups);
