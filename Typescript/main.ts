//tsc is compiler of typescript
//compile -  tsc main
//run - node main

// let mdsg = 'hello world'
// console.log(mdsg);


//let a=12;
//let a=13;   show error in ts but not in js


//strictly typed ts
//let str: string = 'hello';
//str = 1;  shows error in ts but not in js




//variable declaration with types
let ischeck:boolean = false;
let n:number=31;
let myname:string;
console.log(myname)

//array
let arr:number[] = [1,2,4,5];
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

let person:[string,number]=["August",31];

//enum type
enum Color {Red=5,Green,Blue}
let c: Color.Red;


//any type
let randomvalue:any = 12;
randomvalue = "sawant";
randomvalue = true;

let myVariable : any = "bapuso";
console.log(myVariable.name)
//myVariable();
console.log((myVariable as string).toUpperCase())

//variable with multiple type ie: UNION TYPE
let multitype:number | boolean;
multitype = true;
multitype = 22;


//functions in js
function add(n1,n2){
    return n1+n2;
}

//function in ts
function addition(n1:number,n2:number){
    return n1+n2;
}
add(5,2);
addition(5,2)

//function with return type
function addIt(n1:number,n2:number):number{
    return n2+n2;
}
addIt(5,2);
//addIt(5); it will give error it require 2 paramters

//here we must pass 2 parameters to addIt but it is possible to pass optional parameter as well
function sumOfNumbers(n1:number,n2? : number){   //? means it is optional parameter
    console.log(n1)
}
sumOfNumbers(2,4);
sumOfNumbers(2)



//interface
//An interface is just like an object but it only contains the information about object properties and their types. ...
// If you want an object to basically have any property,
// then you can explicitly mark a value any and the TypeScript compiler won't infer the type from the assigned object value.




// without interfaces in ts
function fullName(person:{firstname:string,lastname:string}){
    console.log(`${person.firstname} ${person.lastname}`)
}
let p = {
    firstname  : "bapuso",
    lastname : "sawant"
};      //  : is  used to initialise value in object
fullName(p);

//Using interface

interface Person{
    firstname:string;
    lastname:string;
    middlename ?:string;//optional
}
function showName(person:Person){
    console.log(`${person.firstname} ${person.lastname}`)
}
showName(p);  


//classes
class Employee{
    employeeName:string;
    constructor(name:string){
        this.employeeName = name;
    }
    greet(){
        console.log(`Good morning ${this.employeeName}`)
    }
}
let empObj = new Employee('Bapuso');
console.log(empObj.employeeName)
empObj.greet();

 //inheritance

 class Manager extends Employee{
     constructor(managerName:string){
         super(managerName);
     }
     delegateWork(){
         console.log(`manager delegating tasks`)
     }
 }
 let m1 = new Manager('Prashant')
 m1.greet();
 m1.delegateWork();
 console.log(m1.employeeName)

 //acces specifier
 //public private 
 //private member cannot acces in derived class also