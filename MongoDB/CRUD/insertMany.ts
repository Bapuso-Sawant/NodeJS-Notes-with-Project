import * as mongo from 'mongodb';

let mongoClient: any = mongo.MongoClient;
let mongoPromise = mongoClient.connect("mongodb://localhost:27017/MyDb");

class EmployeeManagement{
    public newEmployee(employee:Object){
        return mongoPromise.then(function(client:any){
            let database = client.db("MyDb");

            return database.collection("Employee").insertMany(employee);
        })
    }
}
// export default EmployeeManagement;
let empObj = new EmployeeManagement();

empObj.newEmployee([{ "Name": "Pooja", "Address": "Nashik" }, { "Name": "Trupti", "Address": "Jalna" }, { "Name": "Kalyani", "Address": "nandurbar" }, { "Name": "Bapuso", "Address": "Sangali" }])