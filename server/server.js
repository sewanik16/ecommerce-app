const express = require("express")        // for server configuration
const mongoose = require("mongoose")      // for connect mongodb to express app
const userController = require("./user/routes/user")

const app = express()                    // import all configuration inside app

app.listen(3001,(err)=>{                 // server start
    if(!err) 
    console.log("server started at port:3001")
    else
    console.log(err)
})

mongoose.connect("mongodb://localhost/ecommerce",(data)=>{
     
},(err)=>{
    console.log(err)
})


app.get("/",(req,res)=>{                  // base route
    res.send("E-Commerce Back-End")
})

app.use("/user",userController)                     // middleware