import { User } from "./user";
 
const fs = require('fs');
const path = require('path')
 
export class Register{
  static newUser(user:User){
    return new Promise(function(resolve,reject){
      try{
        let filePath = path.join(__dirname, "../ts_Modules/") + "userDetail.json";
        const fileData = fs.readFileSync(filePath, "utf-8");
        let arrayOfObjects = JSON.parse(fileData);
        
        arrayOfObjects.userData.push(user);
        fs.writeFileSync(filePath, JSON.stringify(arrayOfObjects,null,"\t"));
        resolve(User);
      }
      catch(err){
        reject(console.error(err));
      }
      
    })
  }
}



// const path = require('fs');
// const fs  = require('fs');

// export class Register{
//     public newUser(userObject: any) {
//         return new Promise(function (resolve, reject) {
//             try {
//                 let filePath = path.join(__dirname, "../") + "userDetails.json";
//                 const fileData = fs.readFileSync(filePath, "utf-8");
//                 let arrayOfObjects = JSON.parse(fileData);
//                 arrayOfObjects.userData.push(userObject);
//                 fs.writeFileSync(filePath, JSON.stringify(arrayOfObjects));
//                 resolve(userObject);
//             } catch (err) {
//                 reject(console.error(err));
//             }
//         });
//     }
// }
// let RegisterObj = new Register();
// RegisterObj.newUser();

//promises
// var promise = new Promise(function(resolve,reject){
//     let a = 20;
//     let b = 10;
//     if(a===b){
//         resolve("values are same....");
//     }
//     else
//         reject();
// });
// promise .then(function(){
//     console.log("Same");
// })
// .catch(function(){
//     console.log("Error")
// })