
const express = require("express")
const route = require("./route/route")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://nehajaiswal:neha123@nehadb.pcorgpc.mongodb.net/urlshortner")
    .then(() => console.log("Mongodb is connected"))
    .catch(err => console.log(err))

app.use("/", route)

app.listen(3000, function () {
    console.log("Express ap running on port ", +(3000))
})