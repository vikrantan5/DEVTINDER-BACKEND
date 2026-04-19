// const adminAuth =(req ,res , next)=>{

//   const token = "vikrantsingh"
//   const isAdminAuth = token ==="vikrantsingh"
//   if(isAdminAuth){
//     next();
//   }
//   else{
//     res.send("you are not aiuthorizzed")
//   }
// }
// const userAuth =(req ,res , next)=>{

//   const token = "vikrantsingh"
//   const isAdminAuth = token ==="vikrantsingh"
//   if(isAdminAuth){
//     next();
//   }
//   else{
//     res.send("you are not aiuthorizzed")
//   }
// }

// module.exports ={adminAuth ,userAuth }




// const isAdminAuth = (req , res)=>{
//   let token = "vikrant"
//   const isAuthoriedAdmin = token === "vikrant"
//   if(isAuthoriedAdmin){
//     next();

//   }
//   else{
//     res.send("you are not admin")
//   }
    


// }
// const isUserAuth = (req , res)=>{
//   let token = "vikrant"
//   const isAuthoriedAdmin = token === "vikrant"
//   if(isAuthoriedAdmin){
//     next();

//   }
//   else{
//     res.send("you are not admin")
//   }
    


// }

// module.exports = {isAdminAuth , isUserAuth }












const jwt = require("jsonwebtoken")
const User = require("../models/user")
const userAuth =async (req ,res ,next)=>{
  try{
      //read the token fromt the cookies

  const {token} = req.cookies
  if(!token){
    throw new Error(" token is  not found")
  }

  const decodedObj =  await jwt.verify(token , "devtinder")
  const {_id} = decodedObj

  const user = await User.findById(_id)

  if(!user){
    throw new Error("user is not find")
  }
  req.user = user
 next()
  }
  catch(err){
    res.status(400).send("ERROR" + err.message)
  }
}

module.exports = {userAuth}