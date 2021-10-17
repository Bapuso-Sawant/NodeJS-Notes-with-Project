"use strict";
exports.__esModule = true;
var readline = require("readline");
var r1 = readline.createInterface(process.stdin, process.stdout);
r1.question("Enter your input here : ", function (ip) {
    var obj = new StringClass();
    obj.nameHandler(ip);
});
var StringClass = /** @class */ (function () {
    function StringClass() {
    }
    StringClass.prototype.nameHandler = function (name) {
        console.log("index number of Enzigma is " + name.indexOf('Enzigma'));
        console.log(name.substr(2, 3));
        //let stringArrayOfName = String(name);
        //console.log("array of string : "+stringArrayOfName)
        var arrayOfStringOfName = [];
        for (var i = 0; i < name.length; i++) {
            arrayOfStringOfName[i] = name.charAt(i);
        }
        console.log("array of string \"" + name + "\" is : " + "[" + arrayOfStringOfName + "]");
    };
    return StringClass;
}());
