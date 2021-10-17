import * as mongo from 'mongodb';
let mongoclient = mongo.MongoClient;
let mongoPromise = mongoclient.connect("mongodb://localhost:27017/MyDb");

class EmployeeManagement{
    updateEmployee(){
        return mongoPromise.then(function(client:any){
            let database = client.db("MyDb");
            var myquery = { name: /^S/ };
            var newvalues = {$set: {name: "Minnie"} };

            database.collection("Employee").updateMany(myquery, newvalues, function(err:any, res:any) {
                if (err) throw err;
                console.log(res.result.nModified + " document(s) updated");
                //db.close();
              });
        });
    }
}