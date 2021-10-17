import * as readline from 'readline';
var r1 = readline.createInterface(
    process.stdin,process.stdout
)
class ArrayClass{
    trainees:string[] = ["Bapuso","Snehal","Kajol","Trupti","Pratibha"];
    //continueStatus='yes';
    presentStatus:boolean=false;
    newTrainees(newJoinser:string):string[]{        
        this.trainees.push(newJoinser);
        return this.trainees;
    }
    noOfTrainees():number{
        return this.trainees.length;
    }
    addAtTop(trainee:string):string[]{
        let newTraineeArray:string[]=[];
        for(let i=0;i<=this.trainees.length;i++){
            if(i==0){
                newTraineeArray.push(trainee)
            }
            else{
                newTraineeArray.push(this.trainees[i-1])
            }
        }
        return newTraineeArray;
    }
    addTrainee(trainee:string):any{
        for(let i=0;i<this.trainees.length;i++){
            if(this.trainees[i] == trainee){
                this.presentStatus = true;
            }
        }
        if(!this.presentStatus){
            this.trainees.push(trainee);
            this.presentStatus=false;
        }
        else{
            console.log(" Trainee already exist");
        }
        return this.trainees;
    }
    removeTrainne():string[]{
        for(let i=0;i<this.trainees.length;i++){
            console.log(this.trainees[i])
        }
        return this.trainees;
    }
    sortTrainee() : string[]{
        this.trainees.sort();
        return this.trainees;
    }
    showTrainee(){
        console.log(this.trainees)
    }
}

let obj = new ArrayClass();
console.log("Select Options: ")
var continueStatus='yes';

//while(obj.continueStatus != 'no')
{
    console.log("1.Add new Trainees");
    console.log("2.Number Of trainees");
    console.log("3.Add trainne at top");
    console.log("4.Add Trainees at end if already not present ");
    console.log("5.Remove Trainee");
    console.log("6.Sort Trainee");
    console.log("7.Show Trainee");
    let choice:number;
    r1.question("Enter Your Choice",(userChoice)=>{
        choice=Number(userChoice);
        switch(choice){
            case 1:
                r1.question("Enter new Trainee : ",traineToAdd=>{
                    console.log("Trainees: "+obj.newTrainees(traineToAdd))  
                    r1.close();                  
                })    
                break;
            case 2:
                console.log("Trainees: "+obj.noOfTrainees())                  
                break;
            case 3:
                r1.question("Enter Trainee Name : ",traineToAdd=>{
                    console.log("Trainees: "+obj.addAtTop(traineToAdd))    
                    r1.close();                
                })    
                break;
            case 4:
                r1.question("Enter Trainee Name : ",traineToAdd=>{
                    console.log("Trainees: "+obj.addTrainee(traineToAdd))     
                    r1.close();               
                })    
                break;
            case 5:
                console.log("Trainees after removal: "+obj.removeTrainne())                
                break;
            case 6:
                console.log("Trainees after sort : "+obj.sortTrainee())
                break;
            case 7:
                obj.showTrainee()
                break;
            default:
                console.log("Invalid input ")
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