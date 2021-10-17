import * as mongo from 'mongodb';

let mongoClient: any = mongo.MongoClient;
let mongoPromise = mongoClient.connect("mongodb://localhost:27017/MyDb");

class EmployeeManagement{
    public readEmployees(){
        return mongoPromise.then(function(client:any){
            
            let database = client.db("MyDb");
            
            database.collection("Employee").find().toArray(function(err:any,result:any){
                if(err) throw err;
                console.log(result)
                //client.close();
            });            
        })
    }
}

let empObj = new EmployeeManagement();
empObj.readEmployees();
