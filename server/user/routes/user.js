const express = require("express");
const signupModal = require("../modals/signup-modal");
const checkExistingUser = require("../utility"); // external function for check user exist in database or not
const bcrypt = require("bcryptjs"); // for password hashing

const salt = 10;
const router = express.Router();

router.post("/login", (req, res) => {
  res.status(200).send("Login works");
});

router.post("/signup", async (req, res) => {
  if (await checkExistingUser(req.body.username)) {
    res.status(400).send("Username exist. please try with different username");
  } else {
    bcrypt.genSalt(salt).then((saltHash)=>{

    }).catch((err)=>{
        console.log(err)
    })

    signupModal
      .create({
        username: req.body.username,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
      })
      .then(() => {
        res.status(200).send(`${req.body.username} added successfully`);
      })
      .catch((err) => {
        res.status(400).send(err.message);
      });
  }
});

router.post("/logout", (req, res) => {
  res.status(200).send("Logout works");
});

module.exports = router;
