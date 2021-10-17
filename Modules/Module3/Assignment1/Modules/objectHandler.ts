// import { training } from "./object";
// class Objectclass{
//     startTraining(task:string):any{
//         let trainingObj = new training();
//         trainingObj.traineeName = "Bapuso Sawant";
//         trainingObj.duration = "1 Month";
//         trainingObj.noOfModules = 4;
//         trainingObj.moduleList = ["arrayHandler","StringHandler"]
//         trainingObj.moduleList.push(task);
//         //trainingObj.trainingStatus
//         console.log(trainingObj.traineeName);
//         console.log(trainingObj.duration);
//         console.log(trainingObj.noOfModules);
//         console.log(trainingObj.moduleList);
//     } 
// }
// let ObjectclassObj = new Objectclass();
// ObjectclassObj.startTraining("ObjectHandler");


// import training from "./object";
// import * as readline from "readline";
// import { question } from "readline-sync";

// var r1 = readline.createInterface(
//     process.stdin,process.stdout
// );
// r1.question("Enter your input here : ",(ip)=>{    
    
// })

// export default class ObjectClass implements training {
// public traningObject: training;
// traineeName: string;
// duration: string;
// moduleList: String[];
// moduleArray: String[];
// noOfModules: number;
// constructor() {
// this.moduleArray = [];
// this.traningObject = <training>{};
// // const trainee: string = question("Enter Trainee Name\n");
// // this.startTraining(trainee);
//  }
// startTraining(task: string): any {
// let result :any;
// this.traningObject.traineeName = task;
// // console.log(this.traningObject.traineeName);
// this.traningObject.noOfModules = parseInt(
// question("Enter No of Modules\n")
//  );
// if(this.traningObject.noOfModules == 0){
// return this.traningObject;
//  }
// for (let i = 0; i < this.traningObject.noOfModules; i++) {
// const trainee: string = question("Enter Modulename \n");
// if (trainee == "" ) {
// result = this.traningObject;
// break;
//  } else {
// result= this.newModule(trainee, this.trainingStatus);
//  }
//  }
// return result;
//  }
// newModule(module: string, callback): any {
// this.moduleArray.push(module);
// this.traningObject.moduleList = this.moduleArray;
// let result = callback(this.traningObject);
// console.log(result);
// return result;
//  }
// trainingStatus(traningObject: training): any {
// // console.log(traningObject.moduleList.length);
// let result: any;
// if (traningObject.moduleList.length == traningObject.noOfModules) {
// result = "Training Done Successfully with Modules";
//  } else {
// result = traningObject.moduleList;
//  }
// return result;
//  }
// }