const express = require("express")
const { userAuth } = require("../middlewares/auth")
const ConnectionRequestModel = require("../models/connectionRequest")
const userRouter = express.Router()
const User = require("../models/user")


const USER_SAFE_DATA="firstName lastName about skills photoUrl age gender"
// get all the pending request for the loggedin user
userRouter.get( ("/user/requests/recieved") , userAuth , async(req ,res)=>{
    try{
        const loggedinUser = req.user
        const allconnectionRequests =await ConnectionRequestModel.find({
            toUserId:loggedinUser._id,
            status:"interested"
        }).populate("fromUserId" , USER_SAFE_DATA)
        res.json({
            message:"Data fetched successful;ly",
            data:allconnectionRequests
        })
    }
    catch(err){
        res.status(400).send("ERROR" + err.message)
    }
})

userRouter.get("/user/connections" , userAuth , async(req , res)=>{
    try{
        const loggedinUser = req.user
        const allAcceptedUser = await ConnectionRequestModel.find({
            $or:[
                {toUserId:loggedinUser._id , status:"accepted"},
                {fromUserId:loggedinUser._id , status:"accepted"}
            ]
        }).populate("fromUserId" ,USER_SAFE_DATA)
        .populate("toUserId" ,USER_SAFE_DATA)

         const data =allAcceptedUser.map((s)=>{
            if(s.fromUserId._id.toString() == loggedinUser._id.toString()){
                return s.toUserId
            }
           return s.fromUserId
        })

          res.json({data})
        //

    }
    catch(err){
        res.status(400).send("ERROR"+err.message)
    }
})




userRouter.get("/feed" , userAuth , async(req ,res)=>{
    try{
        //jo pahle se fiened h wo nhi dikhna chahiye
        //jisko ignore ya interested lkiya hu wo nhi dikhna chgahiye
        // accepted or rejected wala v nhi dikhna chaiye
        //his own card

        const loggedinUser = req.user

        const page = parseInt(req.query.page) ||1;
        let  limit = parseInt(req.query.limit) ||10;
        limit =limit>50 ? 50:limit;
        const skip = (page-1)*limit


       const allConnectionrequest = await ConnectionRequestModel.find({
        $or:[
            {fromUserId:loggedinUser._id},
            {toUserId:loggedinUser._id}
        ]
       }).select("fromUserId toUserId")
    

       const hideUsersFromFeed =new Set();
       allConnectionrequest.forEach((req)=>{
        hideUsersFromFeed.add(req.fromUserId.toString())
        hideUsersFromFeed.add(req.toUserId.toString())
       })

       const users = await User.find({
        $and:[{_id:{$nin:Array.from(hideUsersFromFeed)},},
            {_id:{$ne:loggedinUser._id }}
        ]

       }).select(USER_SAFE_DATA).skip(skip).limit(limit)

       res.send(users)

    }
    catch(err){
        res.status(400).json({
            message:err.message
        })
    }
})

module.exports = userRouter