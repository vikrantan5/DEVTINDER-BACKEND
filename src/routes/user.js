const express = require("express")
const { userAuth } = require("../middlewares/auth")
const ConnectionRequestModel = require("../models/connectionRequest")

const userRouter = express.Router()



// get all the pending request for the loggedin user
userRouter.get( ("/user/requests/recieved") , userAuth , async(req ,res)=>{
    try{

        const loggedinUser = req.user
        const allconnectionRequests =await ConnectionRequestModel.find({
            toUserId:loggedinUser._id,
            status:"interested"
        }).populate("fromUserId" , ["firstName" , "lastName" ,"about" ,"skills"])

        res.json({
            message:"Data fetched successful;ly",
            data:allconnectionRequests
        })
    }
    catch(err){
        res.statusCode(400).send("ERROR" + err.message)
    }
        
    
})


module.exports = userRouter