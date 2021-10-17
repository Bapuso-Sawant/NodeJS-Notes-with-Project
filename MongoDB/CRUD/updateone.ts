import * as mongo from 'mongodb';
var mongoclient = mongo.MongoClient;

var mongoPromise = mongoclient.connect("mongodb://localhost:27017/MyDb");

class EmployeeManagement{
    updateOne(){
        return mongoPromise.then(function(client:any){
                var database = client.db("MyDb");
                var myquery = { Name:"asdfsffffffffffff" };
                var newvalues = { $set: {Name: "Mickey" } };
                database.collection("Employee").updateOne(myquery, newvalues, function(err:any, res:any) {
                    if(err) throw err;
                    console.log("1 document updated");
                    //db.close();
                });
        })
    }
}