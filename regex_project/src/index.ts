//

let testString = "DoSomething(var1,var2,var3);";
let regex = /^([a-zA-Z_]\w*)\(([a-zA-Z_0-9\s]+,?)+\);?$/
let result = regex.test(testString);

console.log(regex.exec(testString));
console.log(`RESULT: ${result}`);

let matches = testString.match(regex);

console.log(matches);

//
// const regex = /^([a-zA-Z_]\w*)\((.*?)\);?$/gmi;
// const str = "DoSomething(var1,var2,var3)";
// const match = str.match(regex);
//
// console.log(match);
//
// if (match) {
//     const funcName = match[1]; // "DoSomething"
//     const args = match[2].match(/\w+/g); // ["var1", "var2"]
//
//     console.log("Function Name:", funcName);
//     args!.forEach((arg, index) => console.log(`Argument ${index + 1}: ${arg}`));
// } else {
//     console.log("No match found");
// }