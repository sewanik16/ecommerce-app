// username, order_id, order_type, item_id, order_status

const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    order_id : {
        type : String,
        required : true,
    },
    order_type : {
        type : String,
        required : true,
    },
    item_id : {
        type: String,
        required : true
    },
    order_status : {
        type: String,
        required : true
    }

},
{
    versionKey: false // You should be aware of the outcome after set to false
})
const orderModal = mongoose.model("order",orderSchema)

module.exports = orderModal