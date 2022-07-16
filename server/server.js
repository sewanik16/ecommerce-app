const express = require("express")        // for server configuration
const mongoose = require("mongoose")      // mongoose is client for connect mongodb to express app
const userController = require("./user/routes/user")
const multer = require("multer")()

const app = express()                    // import all configuration inside app

app.listen(3001,(err)=>{                 // server start
    if(!err) 
    console.log("server started at port:3001")
    else
    console.log(err)
})

app.use(express.json())                         // body parser middleware // json format
app.use(express.urlencoded({extended: false}))  // body parser middleware // urlencoded format
app.use(multer.array())                         // body parser middleware // form data

mongoose.connect("mongodb://localhost/ecommerce",(data)=>{    //database connection
     console.log("successfully connected database")
},(err)=>{
    console.log(err)
})


app.get("/",(req,res)=>{                  // base route
    res.send("E-Commerce Back-End")
})

app.use("/user",userController)                     // middleware