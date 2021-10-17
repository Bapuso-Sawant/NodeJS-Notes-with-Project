import * as mongo from 'mongodb';

let mongoclient = mongo.MongoClient;
let mongoPromise = mongoclient.connect("mongodb://localhost:27017/MyDb");

class EmployeeManagement{
    readEmployee(){
        mongoPromise.then(function(client:any){
            let database = client.db("MyDb");
            database.collection("Employee").findOne({"Name":"Pooja"},function(err:any,result:any){
                if(err) throw err;
                console.log(result)
            })
        });
    }
}
let empObj = new EmployeeManagement();
empObj.readEmployee();