const express = require("express")

const router = express.Router()

router.post("/login",(req,res)=>{
    res.status(200).send("Login works")
})

router.post("/signup",(req,res)=>{
    res.status(200).send("Signup works")
})

router.post("/logout",(req,res)=>{
    res.status(200).send("Logout works")
})

module.exports = router