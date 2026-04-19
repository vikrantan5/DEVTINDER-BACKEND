
const express = require('express');
const profileRouter = express.Router()
const {userAuth} = require("../middlewares/auth")
const {validateProfileEditData} =require("../utils/validation")
const jwt =require("jsonwebtoken")
const User = require("../models/user")
const bcrypt = require("bcrypt")

profileRouter.get("/profile/view" ,userAuth  ,async (req ,res)=>{
  try{
  const user =req.user
  res.send(user)
  }
  catch(err){
    res.status(400).send("ERROR"+err.message)
  }  
})

profileRouter.patch("/profile/edit" , userAuth , async(req , res)=>{
  try{
    if(!validateProfileEditData(req)){
      throw new Error("Invalid Edit Request  ")
    }


    const loggedinuser = req.user
    console.log(loggedinuser)
    Object.keys(req.body).forEach(key=>loggedinuser[key]=req.body[key])
    await loggedinuser.save()
    res.json({
      message:`${loggedinuser.firstName} , your profile updated`,
      data: loggedinuser
    })
  }
  catch(err){
    res.status(400).send("ERROR"+err.message)
  }
})


profileRouter.patch("/profile/change-password", userAuth, async (req, res) => {
  try {
    const { password, newPassword } = req.body;

    const loggedinuser = req.user;

    // 1. Verify old password
    const isPasswordValid = await bcrypt.compare(
      password,
      loggedinuser.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid current password");
    }

    // 2. Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 3. Update password
    loggedinuser.password = hashedPassword;

    // 4. Save to DB
    await loggedinuser.save();

    // 5. Send response
    res.send("Password updated successfully");
  } catch (err) {
    res.status(400).send("Error " + err.message);
  }
});


module.exports = profileRouter