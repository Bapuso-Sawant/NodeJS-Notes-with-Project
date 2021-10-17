import { User } from "../model/user";
import { question } from "readline-sync";
import { Register} from "../model/register";
import { retrieveUser } from "../model/retrieveUser";

export class InputDetails{
    getInput():User{
        
        userObj.username = question("Enter Username");
        userObj.password = question("Enter Password");
        userObj.firstName = question("Enter firstname");
        userObj.lastName = question("Enter lastname");
        userObj.Address = question("Enter Address");
        return userObj;
    }   
    showOutput(){
        console.log(this);
    } 
}
let userObj = new User();

let InputDetailsObj = new InputDetails();
// let re = Register.newUser( InputDetailsObj.getInput())
// console.log(userObj)

// let username = question("Enter Username : ");
// userObj.username = username;

// let pass = question("Enter password: ");
// userObj.password = pass;                                                                      
// retrieveUser(userObj);

let choice1;
let choice :number
let flag:boolean= true
do {
    console.log("1. register user");
console.log("2. Retrive user");
choice1 = question("enter your choice")
choice=  +choice1;
 
switch(choice){
    case 1: 
    Register.newUser(InputDetailsObj.getInput())
     console.log("user added sucessfully");
    break;
    case 2:
        let username= question("Enter  username  ");
        let password=question("enter password ");
        
        retrieveUser(username,password);
        break;
        default:
            console.log("Invalid choice");
            
    }
    let y = question("do you want to continue...")
    
     if(y=='n'){
         flag=false
     }
}while(flag==true)
