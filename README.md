# Typescript CheatSheet
[Learn Typescript](https://www.typescriptlang.org/docs/)

## Setup
Install Ts Globally on your machine
```js
npm i -g typescript
```
check version
```js
tsc -v
```
create the tsconfig.json file
```js
tsc --init
```
set the root(to complie TS files from) and output(for the complied Js files) directories in ***tsconfig.jsx***
```json
"rootDir" : "./src",
"outDir" : "./public",
```

## Compiling
Compile a specified Ts file into a Js file of the same name, into the same directory(i.e. index.ts to index.js).
```js
tsc index.ts
```
Tell tsc to complie specified file whenever a change is saved by adding the watch flag(-w)
```js
tsc index.js -w
```
Compile specified file into specified output file
```js
tsc index.ts --outfile out/script.js
```
if no file is specified , tsc will complie all TS files in the "rootDir" and output in the "outDir". Add -w to watch for changes.
```js
tsc -w
```

## Strict Mode
In ***tsconfig.json***, it is recommended to set strict to true. One helpful feature of strict mode is No Implicit Any:
```ts
//Error : Parameter 'a' implicity has an 'any' type
function logName(a){
    console.log(a.name)
}
```

## Primitive Types
There are 7 primitive types in JS: 
```js
string, number, bigInt, boolean,undefined,null,symbol
```
Explicit type annotation
```ts
let firstname : string = 'Danny'
```
if we assign a value (as above), we don't need to state the type - TS will infer it("implicit type annotation")
```ts
let firstname = 'Danny'
```

## Union Types
A variable that can be assigned more that one type
```ts
let age : number | string
age = 26;
age = '25';
```

## Dynamic Types
The **any** type basically reverts TS back to JS.
```ts
let age : any = 100;
age = true;
```

## Literal Types
We can refer to specific string & numbers in type positions
```ts
let direction : 'UP' | 'DOWN';
direction = 'up';
```

## Objects
Objects in Ts must have all the correct properties & value types
```ts
let person : {
    name : string;
    isProgrammer : boolean;
};


person = {
    name : 'Danny',
    isProgrammer : true
};


person.age = 26; // Error - no age prop on person object

person.isProgrammer = 'yes'; // Error - should be boolean
```

## Arrays
We can define what kind of data an array can contain
```ts
let ids : number[] = [];
ids.push(1);
ids.push("2"); // Error
```
Use a union type for arrays with multiple types
```ts
let options : (string | number)[];
opptions = [10,'up'];
```
if a value is assigned, TS will infer types in the array.
```ts
let person = ['Delia', 48];
person[0] = true; //Error - only string or numbers allowed
```

## Tuples
A tuple is a special type of array with fixed size & known data types at each index. They're stricter than regular arrays.
```ts
let options : [string, number];
options = ['UP', 10];
```

## Functions
We can define the types of the arguments, and the return type. Below : string could be omitted because TS would infer the return type.
```ts
function circle(diam : number): string {
    return 'Circumf = ' + Math.PI * diam;
}
```
The same function as an ES6 arrow
```ts
const circle = (diam : number) : string => {
    'Circumf = ' + Math.PI * diam;
}
```
If we want to declare a function but not define it use a function signature
```ts
let sayHi : (name : string) => void;

sayHi = (name : string) => 
console.log('Hi" + name);

sayHi('Danny'); //Hi Danny
```
## Type Aliases
Allow you to create a new name for an existing type. Type can help to reduce code duplication. They're similar to interfaces, but can also describe primitive types.
```ts
type StringOrNum = string | number;
let id : StringOrNum = 24;
```

## Interfaces
Interfaces are used to describe objects. Interfaces can always be reopened & extended, unlike Type Aliases. Notice that `name` is `readonly`

```ts
interface Person {
    name : string;
    isProgrammer : boolean:
}

let p1 : Person = {
    name 'Delia',
    isProgrammer : false,
};

p1.name = 'Del'; // Error - read only
```
Two ways to describe a function in an inrerface
```ts
interface Speech {
    sayHi(name : string) : string;
    sayBye : (name : string) => string;
}

let speech : Speech = {
    sayHi : function (name : string){
        return 'Hi' + name;
    },
    sayBye : (name: string) => 'Bye ' + name,
}
```

Extending an interface
```ts
interface Animal {
    name : string;
}

interface Dog extends Animal {
    breed : string;
}
```

## The DOM & Type Casting
Ts doesn't have access to the Dom, so use the non-null operator, `!`, to tell Ts the expression isn't null or undefined
```ts
const link = document.querySelector('a)!;
```
If ab element is selected by id or class, we need to tell TS what type of elementit is via Type Casting 
```ts
const form = document.getElementById('singup-form') as HTMLFormElement;
```

## Generics
Generics allow for type safety in components where the arguments & return types are unkown ahead of time.
```ts
interface HasLength {
    length : number;
}

// logLength accepts all types with a length property
const logLength = <T extends HasLength>(a : T) => {
    console.lgo(a.length)
};

// Ts "captures" the type implicity
loglength('Hello'); //5

// Can also explicitly pass the type to T
logLength<number[]>([1,2,3]); //3
```
Declare a type, T, which can change in your interface.
```ts
interface Dog<T> {
    breed : string;
    treats : T;
}

// We have to pass in a type argument
let labrador : Dog<string[]> = {
    breeed : 'scottish terrier',
    treats : ['turkey', 'haggis'],
};
```

## Enums
A set of related values, as a set of descriptive constanst
```ts
enum ResourceType {
    BOOK,
    FILE,
    FILM
}

ResourceType.BOOK; // 0
ResourceType.FILE; // 1
```

## Narrowing
Occurs when a variable moves from a less precise type to a more precise type
```ts
let age = gerUserAge();
age // string | number

if(typeof age === 'string') {
    age; // string
}
```
[More Example](src/Text.ts)
[Official Doc](https://www.typescriptlang.org/docs/)

## Cheatsheet Images
![image](https://user-images.githubusercontent.com/97354310/174465266-9fd5975d-3c79-4430-9da1-a41264c6d98e.png)
![image](https://user-images.githubusercontent.com/97354310/174465274-0aaa739d-defc-4ff6-be24-2c932270d280.png)
![image](https://user-images.githubusercontent.com/97354310/174465280-f934d1d2-88cb-4d93-855d-a1bd3ebcc33b.png)
![image](https://user-images.githubusercontent.com/97354310/174465285-a160bbb4-d089-4991-96f8-458575e7d1e7.png)