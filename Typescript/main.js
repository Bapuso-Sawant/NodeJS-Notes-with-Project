//tsc is compiler of typescript
//compile -  tsc main
//run - node main
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let mdsg = 'hello world'
// console.log(mdsg);
//let a=12;
//let a=13;   show error in ts but not in js
//strictly typed ts
//let str: string = 'hello';
//str = 1;  shows error in ts but not in js
//variable declaration with types
var ischeck = false;
var n = 31;
var myname;
console.log(myname);
//array
var arr = [1, 2, 4, 5];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
var person = ["August", 31];
//enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c;
//any type
var randomvalue = 12;
randomvalue = "sawant";
randomvalue = true;
var myVariable = "bapuso";
console.log(myVariable.name);
//myVariable();
console.log(myVariable.toUpperCase());
//variable with multiple type ie: UNION TYPE
var multitype;
multitype = true;
multitype = 22;
//functions in js
function add(n1, n2) {
    return n1 + n2;
}
//function in ts
function addition(n1, n2) {
    return n1 + n2;
}
add(5, 2);
addition(5, 2);
//function with return type
function addIt(n1, n2) {
    return n2 + n2;
}
addIt(5, 2);
//addIt(5); it will give error it require 2 paramters
//here we must pass 2 parameters to addIt but it is possible to pass optional parameter as well
function sumOfNumbers(n1, n2) {
    console.log(n1);
}
sumOfNumbers(2, 4);
sumOfNumbers(2);
//interface
//An interface is just like an object but it only contains the information about object properties and their types. ...
// If you want an object to basically have any property,
// then you can explicitly mark a value any and the TypeScript compiler won't infer the type from the assigned object value.
// without interfaces in ts
function fullName(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = {
    firstname: "bapuso",
    lastname: "sawant"
}; //  : is  used to initialise value in object
fullName(p);
function showName(person) {
    console.log(person.firstname + " " + person.lastname);
}
showName(p);
//classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return Employee;
}());
var empObj = new Employee('Bapuso');
console.log(empObj.employeeName);
empObj.greet();
//inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Prashant');
m1.greet();
m1.delegateWork();
console.log(m1.employeeName);
