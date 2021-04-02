const bodyParser= require("body-parser");
const express= require("express");
const  Mongoose  = require("mongoose");
const student= require("./routes/student.route");
const port=3000;

const app= express();

Mongoose.connect("mongodb://localhost/studentDB", {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
    console.log("database connected succesfully")
})
.catch(err=>{
console.log("cannot connect to database", err)
process.exit();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use("/student", student);

app.listen(port, ()=>{
    console.log(`server created on port ${port}`)
})
