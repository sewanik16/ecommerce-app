const express = require("express")        // for server configuration
const mongoose = require("mongoose")      // mongoose is client for connect mongodb to express app

const userController = require("./user/routes/user")            // midleware 1
const orderController = require("./user/routes/orders")         // midleware 2
const cartController = require("./user/routes/cart")            // midleware 3
const itemController = require("./user/routes/items")

const multer = require("multer")()        // for encoded data from form

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

// middlewares
app.use("/user",userController)       
app.use("/order",orderController)   
app.use("/cart",cartController)
app.use("/item",itemController)

//______________________________________________________________________________________________________
// key point to remember 👍
//_______________________________________________________________________________________________________
// server.js  --> main file contains server, middleware, database connection,  body parser and base routes
// divide project in client (front-end part) and server (back-end part)
// under server part --> models, routes , utility , server.js, package.json, gitignore file

// steps --> create models --> create routes 
// import models in routes 
// import routes in server.js

// to store in databse --> create()
// to fetch all data   --> find()
// to delete           --> deleteOne()
// to update           --> updateOne()