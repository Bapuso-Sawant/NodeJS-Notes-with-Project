import * as mongo from 'mongodb';

let mongoClient: any = mongo.MongoClient;
let mongoPromise = mongoClient.connect("mongodb://localhost:27017/MyDb");

class EmployeeManagement{
    public newEmployee(employee:Object){
        return mongoPromise.then(function(client:any){
            let database = client.db("MyDb");

            return database.collection("Employee").insertOne(employee);

        })
    }
}
// export default EmployeeManagement;
let empObj = new EmployeeManagement();
empObj.newEmployee({"name":"Bapuso","vilg":"Dubai"})
