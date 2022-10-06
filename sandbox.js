var character = "five";
var num = 5;
console.log(character);
var arrs = ["one", "two", "three"];
// const inputs = document.querySelectorAll('input')
arrs.forEach(function (arr) {
    console.log("here come", arr);
});
var cir = function (diameter) {
    return diameter * Math.PI;
};
console.log(cir(6));
var simpleArray = [1, 2, 3];
simpleArray.push(4, 5);
console.log("number of Array", simpleArray);
var mixed = ["one", 2, "three"];
console.log("number of Array", mixed);
//explicit types
var char;
var age;
var logged;
var ninja = [];
ninja.push("Hero");
ninja.unshift("Heroien");
age = 30;
char = "saleena";
logged = true;
console.log("explicit", age, char, logged, ninja);
//multiple type
var unionType = [];
unionType.push("hello");
unionType.push(20);
unionType.push(true);
console.log(unionType);
//TypeScript function
var greet = function () {
    console.log("In this function typescript atomatically consider greet as a function");
};
greet();
//OR
var greeting;
greeting = function () {
    console.log("In this function we are telling typescript to consider greeting as a function");
};
greeting();
//function with argument type
var greets = function (a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b;
    //  console.log(a + b);
    //  console.log(c);
};
var result = greets(5, 4);
console.log(result);
// type Aliases
//without type Aliases
var greetTime = function (user) {
    console.log("".concat(user.name, "Say Hello"));
};
var stringChanger = function (user) {
    console.log("".concat(user.name, "Say Hello"));
};
var objChanger = function (user) {
    console.log("".concat(user.name, "Say Hello"));
};
var anchor = document.querySelector('a');
console.log("here is is", anchor.href);
// export {};
