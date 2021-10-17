import * as readline from 'readline';
var r1 = readline.createInterface(
    process.stdin,process.stdout
);
r1.question("Enter your input here : ",(ip)=>{
    let obj = new StringClass();
    obj.nameHandler(ip);    
})


class StringClass{
    public nameHandler(name:string){

        console.log(`index number of Enzigma is `+name.indexOf('Enzigma'));
        console.log(name.substr(2,3))
        //let stringArrayOfName = String(name);
        //console.log("array of string : "+stringArrayOfName)
        let arrayOfStringOfName :string[] = [];
        for(let i=0;i<name.length;i++){
            arrayOfStringOfName[i] = name.charAt(i);
        }
        console.log(`array of string "${name}" is : `+"["+arrayOfStringOfName+"]")
        }
}
