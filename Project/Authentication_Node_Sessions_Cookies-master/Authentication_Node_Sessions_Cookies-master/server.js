constexpress = require("express");
constsession = require("express-session");
constmongoose = require("mongoose");
constapp = express();
mongoose
    .connect("mongodb://localhost:27017/sessions", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then((res) => {
        console.log("mongodb connected");
    });
app.use(
    session({
        secret: "key that will sign cookie",
        resave: false,
        saveUninitialized: false,
    })
);
app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(5000, console.log("Server is running"));