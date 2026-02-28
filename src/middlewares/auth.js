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




const isAdminAuth = (req , res)=>{
  let token = "vikrant"
  const isAuthoriedAdmin = token === "vikrant"
  if(isAuthoriedAdmin){
    next();

  }
  else{
    res.send("you are not admin")
  }
    


}
const isUserAuth = (req , res)=>{
  let token = "vikrant"
  const isAuthoriedAdmin = token === "vikrant"
  if(isAuthoriedAdmin){
    next();

  }
  else{
    res.send("you are not admin")
  }
    


}

module.exports = {isAdminAuth , isUserAuth }