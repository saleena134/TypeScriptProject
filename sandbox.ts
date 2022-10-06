var character = "five" ;
let num = 5
console.log(character);
var arrs = ["one", "two" , "three"]
// const inputs = document.querySelectorAll('input')
arrs.forEach(arr => {
    console.log("here come" ,arr);
    
})
const cir = (diameter :  number) =>{
    return diameter * Math.PI
}
console.log(cir(6));
let simpleArray = [1, 2, 3]
simpleArray.push(4, 5)
console.log("number of Array" , simpleArray);
var mixed = ["one", 2, "three"]
console.log("number of Array" , mixed);

//explicit types

let char : string
let age : number
let logged : boolean
let ninja : string[] =[]
ninja.push("Hero")
ninja.unshift("Heroien")
age = 30
char = "saleena"
logged = true
console.log("explicit" ,age , char, logged, ninja);

//multiple type
let unionType: (string | boolean | number)[] = []
unionType.push("hello")
unionType.push(20)
unionType.push(true)
console.log(unionType);

//TypeScript function

let greet = () => {
    console.log("In this function typescript atomatically consider greet as a function");
}
greet()
//OR

let greeting : Function
greeting = () =>{
console.log("In this function we are telling typescript to consider greeting as a function");
}

greeting()

//function with argument type

const greets = (a : number, b : number, c: number | string = 10) =>{
 return a + b
//  console.log(a + b);
//  console.log(c);
}
let result = greets(5,4)
console.log(result);
// type Aliases
//without type Aliases
const greetTime = (user:{name : string , uid : number | string}) =>{
    console.log(`${user.name}Say Hello`);
}
// with type Aliases
type StringOrNum = string | number
type objWithName = {name: string , uid: StringOrNum}

const stringChanger = (user:{name : string , uid : StringOrNum}) =>{
    console.log(`${user.name}Say Hello`);
}
const objChanger = (user:objWithName) =>{
    console.log(`${user.name}Say Hello`);
}
// typeCasting (using ! and as)

const anchor = document.querySelector('a')!;

console.log("here is is" ,anchor.href);



 
// export {};
