const express=require("express")
const { createUser, getUsers } = require("../controller/userController")


const router=express.Router()


router.post("/signup",createUser)
router.get("/user",getUsers)

module.exports=router