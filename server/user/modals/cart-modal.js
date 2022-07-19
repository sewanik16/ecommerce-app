const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    item_id :{
        type : String,
        required : true
    }
},{

    versionKey: false // You should be aware of the outcome after set to false

})
const cartModal = mongoose.model("cart",cartSchema)

module.exports = cartModal