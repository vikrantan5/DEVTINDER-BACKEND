const express = require("express")

const requestRouter =express.Router()
const {userAuth} = require("../middlewares/auth")
const ConnectionRequestModel = require("../models/connectionRequest")

requestRouter.post("/request/send/:status/:toUserId"  , userAuth, async(req ,res)=>{

try{
  const fromUserId = req.user._id
  const toUserId =req.params.toUserId
  const status =req.params.status;

  const allowedStatus =["interested" ,"ignore"]

  if(!allowedStatus.includes(status)){
      return res.status(400).json({message:"INVALID request"})
      
  }  



  // if there is existing connection req aur agar kisine pahle se A ne b ko bhena hai to wapas b A ko nhi bhejna chahjioye

  if(ConnectionRequestModel.findOne({
    fromUserId,toUserId
  })){
   res.send("connection already sent")
    
  }
  if(ConnectionRequestModel.findOne({
    fromUserId:toUserId,
    toUserId:fromUserId
  })){
   res.send("YOU ALREADY GOT THE CONNECTION")
    
  }

  const connectionRequest = new ConnectionRequestModel({
    fromUserId,
    toUserId,
    status
  })
  const data= await connectionRequest.save() 

  res.json({
    message:"connection request sent successfullt",
    data 
  })

}
catch(err){
  res.status(400).send("ERROR" +err.message)
}
  
})


module.exports = requestRouter