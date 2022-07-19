const express = require("express")
const itemModal = require("../modals/item-modal")

const router = express.Router()

router.get("/",(req,res)=>{
    itemModal.find().then((itemData)=>{
        res.status(200).send({item :itemData})
    })
})

module.exports = router