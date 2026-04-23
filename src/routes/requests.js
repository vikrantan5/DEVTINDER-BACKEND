const express = require("express")
const User = require("../models/user")
const requestRouter = express.Router()
const { userAuth } = require("../middlewares/auth")
const ConnectionRequestModel = require("../models/connectionRequest")

requestRouter.post("/request/send/:status/:toUserId", userAuth, async (req, res) => {
    try {
        const fromUserId = req.user._id
        const toUserId = req.params.toUserId
        const status = req.params.status;

        const allowedStatus = ["interested", "ignore"]

        if (!allowedStatus.includes(status)) {
            return res.status(400).json({ message: "INVALID request" })
        }

        const toUser = await User.findById(toUserId) 
        if (!toUser) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const existingConnectionRequest = await ConnectionRequestModel.findOne({
            $or: [
                { fromUserId, toUserId },
                { fromUserId: toUserId, toUserId: fromUserId },
            ]
        })

        if (existingConnectionRequest) {
            return res.status(400).json({ message: "Connection request already exists" })
        }

        const connectionRequest = new ConnectionRequestModel({
            fromUserId,
            toUserId,
            status
        })
        
        const data = await connectionRequest.save()

        res.json({
            message: `${req.user.firstName} is ${status} in ${toUser.firstName}`,
            data
        })
    } catch (err) {
        res.status(400).send("ERROR: " + err.message)
    }
})






requestRouter.post("/request/review/:status/:requestId" , userAuth ,async (req , res)=>{

    try{
        const loggedinUser = req.user

        const allowedStatus = ["accepted" , "rejected"]

        const {status , requestId} = req.params
  // validate the status
        const isStatusValid = allowedStatus.includes(status);
        if(!isStatusValid){
            res.status(400).json({message:"the status is invalid"})
        }

     // user1 (fromuserId) ==>user2 (toUserId)
    //loggedinUser ==toUserid
    //status ==intereted
    //then they can accept or reject
    //reqid should b evalid
        const isthereConnectionRequest = await ConnectionRequestModel.findOne({
            _id:requestId,
            toUserId: loggedinUser._id,
            status:"interested"
        })
        if(!isthereConnectionRequest){
            return res.status(404).json({message:"connection req not founf"})
        }
  
        isthereConnectionRequest.status = status;

        const data  = isthereConnectionRequest.save();


        res.json({message:`connection request is ${status}` , data})

    }
    catch(err){
        res.status(400).send("Error"+err.message)
    }

   

})




module.exports = requestRouter