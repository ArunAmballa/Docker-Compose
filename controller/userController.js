const User=require("../model/user")

exports.createUser=async(req,res)=>{

    try{
        const {username,password}=req.body;

        const user=await User.create({username,password})

        return res.status(200).json({
            message:"user created Successfully",
            userId:user.id
        })


    }catch(error){

        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}


exports.getUsers=async(req,res)=>{

    try{

        const users=await User.find({})
        return res.status(200).json({users})

    }catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}