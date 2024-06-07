const express=require("express")
const dotenv=require("dotenv")
const userRoutes=require("./routes/userRoute")
const { connectToDB } = require("./db/config")

const app=express()
app.use(express.json())

dotenv.config()

const PORT=process.env.PORT


app.use("/api/v1",userRoutes)

app.get("/",(req,res)=>{
    res.json({message:"welcome to our application"})
})


app.listen(PORT,()=>{
    connectToDB()
    console.log(`Server is listening on PORT ${PORT}`)
})