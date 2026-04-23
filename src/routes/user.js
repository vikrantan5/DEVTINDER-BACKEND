const express = require("express")
const { userAuth } = require("../middlewares/auth")

const userRouter = express.Router()



// get all the pending request for the loggedin user
userRouter.get( ("/user/requests") , userAuth , (req ,res)=>{
    try{

        const loggedinUser = req.user
    }
    catch(err){
        res.statusCode(400).send("ERROR" + err.message)
    }
        
    
})


module.exports = userRouter