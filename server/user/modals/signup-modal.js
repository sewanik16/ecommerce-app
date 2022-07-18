const mongoose = require("mongoose")

const signupSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true,
        minLength : 10,
        maxLength : 10  
    },
    password : {
        type : String,
        required : true,
        minLength : 6
    }
},{

    versionKey: false // You should be aware of the outcome after set to false

})
const signupModal = mongoose.model("usersignup",signupSchema)

module.exports = signupModal