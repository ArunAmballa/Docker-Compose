const mongoose=require("mongoose")
require("dotenv").config()


exports.connectToDB=async()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB Connection Successfull"))
    .catch((error)=>{
        console.log("DB connection Failed")
        console.log("Error",error)
    })
}

