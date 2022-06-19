//'name' word is present in ts variable and it not redclare block-soped variable 'name'
// *Variable
let person = "Akshay"; //default type : string
let age = 24; //default type : number
let isGoodPerson = false; //default type : boolean
console.log(person);
// person = 20 //Type 'number' is not assignable to type 'string'
person = "Ak";
// age = 'Akshay' //Type 'string' is not assignable to type 'number'
age = 26;
// isGoodPerson = "Yes" //Type 'string' is not assignable to type 'boolean'
isGoodPerson = true;
// Function
const circle = (diameter) => {
    return diameter * Math.PI;
};
// console.log(circle('hello')) //Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(circle(7.5));
// *arrays
let names = ["akshay", "ashish", "raja"];
names.push("surya");
// names.push(3) //Argument of type 'number' is not assignable to parameter of type 'string'.
// names[0] = 3; //Type 'number' is not assignable to type 'string'.
// names = 'hello'; //Type 'string' is not assignable to type 'string[]'.
console.log(names);
let numbers = [10, 20, 30];
numbers.push(40);
// numbers.push('ak') //Argument of type 'string' is not assignable to parameter of type 'number'.
// numbers[1] = 'ak' //Type 'string' is not assignable to type 'number'.
console.log(numbers);
let mixed = ["ak", 10, "ar", 20, 30];
mixed.push("sk");
mixed.push(40);
mixed[0] = 3;
console.log(mixed);
// *objects
let student = {
    name: "ashish",
    learning: "Next.js",
    age: 26,
};
student.name = "akshay";
student.age = 24;
student.learning = "typescript";
// student.name = 20 //Type 'number' is not assignable to type 'string'.
// student.age = 'ak' //Type 'string' is not assignable to type 'number'.
// student.learning = ['react', 'typescript'] //Type 'string[]' is not assignable to type 'string'.
// **Object can't be redeclare in other type, it should be in obj **
// student = "ak"; //Type 'string' is not assignable to type '{ name: string; learning: string; age: number; }'.
//student = ["ak"] // Type 'string[]' is missing the following properties from type '{ name: string; learning: string; age: number; }': name, learning, age
student = {
    name: "surya",
    learning: "Redux",
    age: 23,
};
// student = {
//     name: "surya",
//     learning: "Redux",
//     // age: 23 // Property 'age' is missing in type '{ name: string; learning: string; }' but required in type '{ name: string; learning: string; age: number; }'.
//    // hobby: "coding" // Type '{ name: string; learning: string; hobby: string; }' is not assignable to type '{ name: string; learning: string; age: number; }'. Object literal may only specify known properties, and 'hobby does not exist in type '{ name: string; learning: string; age: number; }'.
// }
// **explicit types**
let character;
let group;
let isParticapating;
// character = 25 //Type 'number' is not assignable to type 'string'.
character = "ak";
// group = 'ak' //Type 'string' is not assignable to type 'number'.
group = 25;
// isParticapating = 01 //Type 'number' is not assignable to type 'boolean'.
isParticapating = true;
// ** arrays **
let students = [];
students.push("ak");
// ** union types **
let any = [];
any.push("hello");
any.push(0);
any.push(false);
console.log(any);
let uid;
uid = "123";
uid = 123;
// **objects**
let personeOne;
personeOne = { name: "ak", age: 24 };
personeOne = []; //array is kind of object so it's allowed
// personeOne = "ak"; //Type 'string' is not assignable to type 'object'.
// ** any **
let number; //or let num : any = 25
number = 25;
console.log(number);
number = true;
console.log(number);
number = "ak";
console.log(number);
number = { name: "ak" };
console.log(number);
number = ["ak"];
console.log(number);
number = [0];
console.log(number);
let mixedArr = [];
mixedArr.push(5);
mixedArr.push("ak");
mixedArr.push(false);
console.log(mixedArr);
let anyObj;
anyObj = { name: "ak", age: 25 };
console.log(anyObj);
anyObj = { name: 25, age: "ak" };
console.log(anyObj);
// **Function **
let greet;
// greet = "hello" //Type 'string' is not assignable to type 'Function'
greet = () => {
    console.log("hello world");
};
const add = (a, b) => {
    console.log(a + b);
};
add(5, 10);
// add(5, "10")  //Argument of type 'string' is not assignable to parameter of type 'number'.
// add(5) //An argument for 'b' was not provided.
const sum = (a, b, c) => {
    console.log(a + b);
    console.log(c);
    // console.log(a + b + c); //Operator '+' cannot be applied to types 'number' and 'string | number'.
};
// sum(5, 10) //Expected 3 arguments, but got 2
const sumTwo = (a, b, c) => {
    // adding ? it means c arguments is optional or you can pass default value to c  string = 10 //Parameter cannot have question mark and initializer. after adding default value
    console.log(a + b);
    console.log(c);
    // console.log(a + b + c); //Operator '+' cannot be applied to types 'number' and 'string | number'.
};
sumTwo(5, 10);
sumTwo(5, 10, "20");
const minus = (a, b) => {
    //  ) : number is showing it's return as a number
    return a + b;
};
let result = minus(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
// const greetUser = (user: { name: string, uid: StringOrNum }) => {
//     console.log(`${user.name} says hello`);
// }
const greetUser = (user) => {
    console.log(`${user.name} says hello`);
};
const greetUserAgain = (user) => {
    console.log(`${user.name} says hello`);
};
// *Function Types (signatures)*
// Example 1
let greetTwo; //signature
greetTwo = (name, greeting) => {
    //parameters should be according to signature
    console.log(`${name} says ${greeting}`);
};
// Example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(10, 5, "add"));
//Example 3
let logDetailsObj;
logDetailsObj = (student) => {
    console.log(`${student.name} is ${student.age} years old`);
};
console.log(logDetailsObj({ name: "ak", age: 25 }));
// *Classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    /*
      *Three different modifies
    
      readonly //only allow readonly both side inside of class and outside of class
      private //only allow to read and change inside the class
      public => which is default value- public value can be change from inside class or outside of class
  
      */
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    //replaced all above with this only
    //in this cunstrutor we have to specify modifier
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £ ${this.amount} for ${this.details}`;
    }
}
class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed £ ${this.amount} for ${this.details}`;
    }
}
let docOne;
let docTwo;
docOne = new Invoice("sk", "fronted-developer", 200);
docTwo = new Payment("raja", "fronted-developer", 200);
let docs = []; //it will follow Hasformatter type
docs.push(docOne);
docs.push(docTwo);
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
let invoices = []; //Invoice[] means it's only accept Invoice class format
invoices.push(invOne);
invoices.push(invTwo);
// We can't change th type but we can change value
// invOne.client = "yoshi"; //readonly can't change
//inv.details // private we can't accesses
invTwo.amount = 400;
console.log(invoices);
const me = {
    name: "akshay",
    age: 25,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
// GENERICS
// <T> : T -> it's capture whatever item type we passing to the function and it's capture what properties, and whent function return it's know what properties is this Ex= we are returning obj so we can access it like obj
// extends specified what it should pass as a argument, you can specified more. Ex => <T extends object {name : string}>
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc = addUID({ name: "Akshay", age: 25 });
// let docTwo = addUID('hello') //Argument of type 'string' is not assignable to parameter of type 'object'.ts(2345)
console.log(doc.name);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { name: "ak" },
};
const docFour = {
    uid: 2,
    resourceName: "shopplingList",
    data: ["bread", "milk", "toast"],
};
console.log(docThree, docFour);
// ENUMS
// Enums which is a way to specify the scriptive constant and associate each one with a numeric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: "name of the wind" },
};
const docSix = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: { name: "ak" },
};
console.log(docFive, docSix);
// *tuples
// tuples is once we define a certain position be with certain type we can't change the type and position
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "ak";
arr = [30, false, "ak"];
let tup = ["ak", 25, true];
// tup[0] = false //Type 'boolean' is not assignable to type 'string'
tup[0] = "yoshi";
// tup[1] = 'ak' //Type 'string' is not assignable to type 'number'
tup[1] = 30;
// tup[2] = 20 //Type 'number' is not assignable to type 'boolean'
tup[2] = false;
let studentGroup;
studentGroup = ["ak", 12345];
export {};
// studentGroup = [12345, 'ak'] //Type 'string' is not assignable to type 'number'
