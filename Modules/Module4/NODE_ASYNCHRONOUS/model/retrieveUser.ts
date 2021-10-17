import { User } from "./user";
const fs = require('fs');
const path = require('path')

export function retrieveUser(username:string,password:string){
    return new Promise(function(resolve,reject){
        try{
            let filePath = path.join(__dirname, "../ts_Modules/") + "userDetail.json";
            const fileData = fs.readFileSync(filePath, "utf-8");
            let arrayOfObjects = JSON.parse(fileData);
            
            let details:User
            for(var i=0;i<arrayOfObjects.userData.length;i++){
              
              if(username === arrayOfObjects.userData[i].username && password === arrayOfObjects.userData[i].password){                
                details=arrayOfObjects.userData[i];
                console.log(details);               
                break;
              }
            }
            if(i===arrayOfObjects.userData.length){
              console.log("No data found....")
            }
            resolve(User);           
          }
          catch(err){
            reject(console.error(err));
          }
    });
}