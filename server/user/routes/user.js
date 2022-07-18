const express = require("express");
const signupModal = require("../modals/signup-modal");
const {checkExistingUser,generatePasswordHash} = require("../utility"); // external function for check user exist in database or not
const bcrypt = require("bcryptjs"); // for password hashing
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const salt = 10;
const secretKey = crypto.randomBytes(64).toString("hex")

const router = express.Router();

router.post("/login", (req, res) => {
  signupModal.find({username:req.body.username}).then((userData)=>{     // check user exist in database  or not
      if(userData.length){
          bcrypt.compare(req.body.password,userData[0].password).then((val)=>{ // check password is match or not 
              if(val){
                  const authToken = jwt.sign(userData[0].username,secretKey)
                  res.status(200).send({authToken})          // this token will store as cookie on client application
              }else{
                res.status(400).send("invalid password")
              }
          })
      }else{
        res.status(400).send("unauthorized user")
      }
  })
});

router.post("/signup", async (req, res) => {
  if (await checkExistingUser(req.body.username)) {
    res.status(400).send("Username exist. please try with different username");
  } 
  else 
  {
    generatePasswordHash(req.body.password).then((passwordHash)=>{
      signupModal.create({username: req.body.username,phoneNumber: req.body.phoneNumber,password: passwordHash}).then(() => {
        res.status(200).send(`${req.body.username} added successfully`);
      })
      .catch((err) => {
        res.status(400).send(err.message);
      });
    })
  }

});


router.post("/logout", (req, res) => {
  res.status(200).send("Logout works");
});

// update password -- put method
// 1. check for old password from database
// 2. compare old password with new password enter by user

router.post("/updatepassword",async (req,res)=>{
      signupModal.find({username: req.body.username}).then((user)=>{
        if(user.length){
              bcrypt.compare(req.body.oldpassword,user[0].password).then((isMatch)=>{
                if(isMatch){
                    generatePasswordHash(req.body.newpassword).then((hashedPassword)=>{
                          signupModal.updateOne({username: req.body.username},{password: hashedPassword}).then(()=>{
                            res.status(200).send("password updated successfully")
                          }).catch((err)=>{
                            res.status(400).send(err)
                          })
                    })
                }else{
                  res.status(400).send("old password is incorrect!")
                }
              })
        }else{
          res.status(400).send("invalid user")
        }
      })
})

module.exports = router;


// mdn docs mentioned that whatever we do with put and delete method ,
// we can do with post 
// thats why html having only 2 methods get and post

// jwt token store in cookie insde browser on client side