"use strict";
exports.__esModule = true;
var readline = require("readline");
var r1 = readline.createInterface(process.stdin, process.stdout);
var ArrayClass = /** @class */ (function () {
    function ArrayClass() {
        this.trainees = ["Bapuso", "Snehal", "Kajol", "Trupti", "Pratibha"];
        //continueStatus='yes';
        this.presentStatus = false;
    }
    ArrayClass.prototype.newTrainees = function (newJoinser) {
        this.trainees.push(newJoinser);
        return this.trainees;
    };
    ArrayClass.prototype.noOfTrainees = function () {
        return this.trainees.length;
    };
    ArrayClass.prototype.addAtTop = function (trainee) {
        var newTraineeArray = [];
        for (var i = 0; i <= this.trainees.length; i++) {
            if (i == 0) {
                newTraineeArray.push(trainee);
            }
            else {
                newTraineeArray.push(this.trainees[i - 1]);
            }
        }
        return newTraineeArray;
    };
    ArrayClass.prototype.addTrainee = function (trainee) {
        for (var i = 0; i < this.trainees.length; i++) {
            if (this.trainees[i] == trainee) {
                this.presentStatus = true;
            }
        }
        if (!this.presentStatus) {
            this.trainees.push(trainee);
            this.presentStatus = false;
        }
        else {
            console.log(" Trainee already exist");
        }
        return this.trainees;
    };
    ArrayClass.prototype.removeTrainne = function () {
        for (var i = 0; i < this.trainees.length; i++) {
            console.log(this.trainees[i]);
        }
        return this.trainees;
    };
    ArrayClass.prototype.sortTrainee = function () {
        this.trainees.sort();
        return this.trainees;
    };
    ArrayClass.prototype.showTrainee = function () {
        console.log(this.trainees);
    };
    return ArrayClass;
}());
var obj = new ArrayClass();
console.log("Select Options: ");
var continueStatus = 'yes';
//while(obj.continueStatus != 'no')
{
    console.log("1.Add new Trainees");
    console.log("2.Number Of trainees");
    console.log("3.Add trainne at top");
    console.log("4.Add Trainees at end if already not present ");
    console.log("5.Remove Trainee");
    console.log("6.Sort Trainee");
    console.log("7.Show Trainee");
    var choice_1;
    r1.question("Enter Your Choice", function (userChoice) {
        choice_1 = Number(userChoice);
        switch (choice_1) {
            case 1:
                r1.question("Enter new Trainee : ", function (traineToAdd) {
                    console.log("Trainees: " + obj.newTrainees(traineToAdd));
                    r1.close();
                });
                break;
            case 2:
                console.log("Trainees: " + obj.noOfTrainees());
                break;
            case 3:
                r1.question("Enter Trainee Name : ", function (traineToAdd) {
                    console.log("Trainees: " + obj.addAtTop(traineToAdd));
                    r1.close();
                });
                break;
            case 4:
                r1.question("Enter Trainee Name : ", function (traineToAdd) {
                    console.log("Trainees: " + obj.addTrainee(traineToAdd));
                    r1.close();
                });
                break;
            case 5:
                console.log("Trainees after removal: " + obj.removeTrainne());
                break;
            case 6:
                console.log("Trainees after sort : " + obj.sortTrainee());
                break;
            case 7:
                obj.showTrainee();
                break;
            default:
                console.log("Invalid input ");
                break;
        }
        // r1.question("You want to continue ?? ",continueStatusFromUser=>{
        //     //console.log("Before:"+continueStatus)
        //     continueStatus=continueStatusFromUser;
        //     //console.log("After:"+continueStatus)
        //     // a = obj.continueStatus;
        //     r1.close();      
        // })        
        // console.log("After:"+continueStatus)
    });
}
//obj.newTrainees("Pratibha");
