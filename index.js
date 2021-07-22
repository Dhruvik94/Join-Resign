const express = require("express")
const app = express()
const mongoose = require("mongoose")
var path = require('path');
app.use(express.static(path.join(__dirname + '/public')));
const login = require("./routes/loginRoute")

mongoose.connect("mongodb://localhost/JoinResign", { useNewUrlParser: true })
const db = mongoose.connection
db.on("open",()=>console.log("Database Connected"))
app.use("/", login)

app.listen(3000)