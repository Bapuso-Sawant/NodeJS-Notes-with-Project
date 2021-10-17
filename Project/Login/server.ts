const express = require('express');
const session =  require('express-session');
const mongoose = require('mongoose');
const MongoDBSession = require('connect-mongodb-session')(session);

const app = express();
const mongoURI = "mongodb://localhost:27017/sessions"

mongoose.connect(mongoURI,{
    useNewUrlParser : true,
    //useCreateIndex : true,
    useUnifiedTopology : true  
})
.then((res:any)=>{
    console.log("mongodb connected");
})

const store = new MongoDBSession({
    uri:mongoURI,
    collection:"mySessions",

});

app.use(session({
    secret: 'key that will sign cookie',
    resave:false,
    saveUninitialized: false,
    store:store
}));

app.get('/',(req:any,res:any)=>{
    console.log(req.session);
    req.session.isAuth = true;
    console.log(req.session.id)
    res.send("Hello Session tut..");
});

app.get('/users',(req:any,res:any)=>{    
    res.redirect("landingpage");
});


app.listen(5000,console.log("Server is running at http://localhost:5000"));