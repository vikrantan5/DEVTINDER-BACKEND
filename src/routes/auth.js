const express = require("express")
const authRouter = express.Router()
const {validatesignupdata} =require("../utils/validation")
const validator = require("validator")
const User = require("../models/user")
const bcrypt =require("bcrypt")


authRouter.post("/signup" , async(req ,res)=>{
  try{
     //validation of data required
      validatesignupdata(req)

       const {firstName, lastName, email, password} = req.body
    //ecrypt  th paassord
    const passwordHash = await bcrypt.hash(password ,10)
    console.log(passwordHash)

//never trust the req.body

const user = new User({firstName , lastName ,email ,password:passwordHash})
    await user.save();
    res.send("user added successfully")
  }
  catch(err){
    res.status(404).send("error :" +err.message)
  }
    
})



authRouter.post("/login" , async(req , res)=>{
  try{

    const {email , password} = req.body;
    if(!validator.isEmail(email)){
      res.send("invalid credentils")
    }
    const user = await User.findOne({email})
    if(!user){
      throw new Error("invalid credentils")
    }

    const isPasswordValid =await user.verifyPassword(password)

    if(isPasswordValid){

      //cookie and all the things

      // 1.create a jwt token
      // const token = await jwt.sign({_id:user._id} , "devtinder" , {expiresIn:"1h"})
      // console.log(token)

      const token =await  user.getJWT()


      //2add the token to cookie and send it back to the user
      res.cookie("token" , token ,{expires:new Date(Date.now() + 8*3600000)})




      res.send("login successfully" +user)
    }
    else{
      throw new Error("invalid credentils")
    }
  }
  catch(err){
    res.status(400).send("ERROR " + err.message)
  }
})



authRouter.post("/logout" ,(req , res)=>{
    res.cookie("token" ,null ,{
        expires:new Date(Date.now())
    })
    res.send("logout successfully")
} )


module.exports = authRouter