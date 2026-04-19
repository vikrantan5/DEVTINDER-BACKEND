const express = require("express")

const requestRouter =express.Router()
const {userAuth} = require("../middlewares/auth")

requestRouter.post("/sendconnectionrequest"  , userAuth, async(req ,res)=>{

  const user = req.user
  
  //sending connectin+on request
  console.log("sendding connection request")
  res.send(user.firstName +"sent connecton req ")
})


module.exports = requestRouter