// console.log("startting a new project");

// const express = require("express");

// const app = express();

// app.use("/test" , (req , res)=>{
//     res.send("hello from the server")
// })

// app.use("/start" , (req , res)=>{
//     res.send("start from the server")
// })

// app.get("/user" , (req , res)=>{
//     console.log(req.query)
//     res.send("this is get call for the server")
// })

// app.post("/user/:userID/:name/:college" ,(req ,res)=>{
//     res.send("data sended successfully")
//     console.log(req.params)
// })

// app.delete("/user" , (req , res)=>{
//     res.send("data deleted successsfully")
// })

// app.use("/" , (req , res)=>{
//     res.send("hchachaer")
// })

// app.use("/user" ,()=>{
//      //this i scaalled ROUTEW HANDLER

// })

// app.use(
//   "/user",
//   (req, res , next) => {
//     // res.send("this i s my route handlwer");
//     console.log("handlling the routes");
//     next();
//     res.send("responsse!!")
//   },
//   (req, res) => {
//     res.send("halding route from 2nd haldler");
//   },
// );

// app.listen(3000, () => {
//   console.log("the server is running onn 3000");
// });
























// const express = require("express");
// const { adminAuth } = require("./middlewares/auth");

// const app = express();
// // app.use("/admin" ,adminAuth)


// // app.get("/admin/getALLData", (req, res) => {
// //   //check if thei req is authorized
// //   //logic ofchecking
// //   res.send("ALL data sent");
// // });

// // app.get("/admin/deleteUser", () => {
// //   console.log("deleted the user successfullt");
// // });

// // app.get("/user", (req, res) => {
// //   console.log("ehhe");
// //   res.send("this is the response coming to the server");
// // });



// // app.get(
// //   "/user/getALL",
// //   [(req, res , next) => {
// //     // res.send("this is the response frorm the user ");
// //     next()
// //   },
// //   (req, res ,next) => {
// //     // res.send("this is the 2nd response from trhe ");
// //     next()
// //   },
// //   [(req, res ,next) => {
// //     // res.send("this is the 3rd response from the serevr");
// //     next()
// //   },
// //   (req, res ,next) => {
// //     // res.send("this is the 4th response from the server");
// //     next()
// //   },],
// //   (req, res ,next ) => {
// //     // res.send("this is thr 5th response from the server");
// //     next()
// //   },
// //   (req, res ,next) => {
// //      res.send("this is the 6th response from the server");
// //     next()
// //   },]
// // );



// // 2nd wayu of writin the route handles like writing it in independent way

// // app.get("/user" , (req , res , next)=>{
// //   console.log("this is the 1st handler for the user route");
// //   next();
// // })

// // app.get("/user", (req, res)=>{
// //   console.log("this is the 2nd handler for the user route");
// //   res.send("this is the response from the user route");
// // })


// app.get("/admin" , (req ,res , next)=>{
//   let pass = 1234

//   if(pass == 12345){
//     console.log("authorized")
//     next()
//   }
// })


// app.get("/admin/getAllData" ,(req , res)=>{


//   res.send("all data sent successfully")
//   console.log("All data sent")
// })



// app.get("/admin/deleteUser" ,(req , res)=>{
//   res.send("deleted the user successfully")
//   console.log("deleted the user successfully")
// })




// app.listen(7777, () => {
//   console.log("server  is successffully listening to the port 7777");
// });






// const express =require("express")
// const app = express()
// const {adminAuth, userAuth}  = require("./middlewares/auth")

// app.use("/admin" ,adminAuth )

// app.get("/admin/getAllData" ,(req , res)=>{
//   // logic for checking for the auth
//   res.send("all data sent")
// })

// app.get("/admin/deleteUser" ,(req , res)=>{
//   // logic for checking the auth
//   res.send("deleted a user")
// })

// app.listen(3000 , ()=>{
//   console.log("server is running on the port +3000")
// })




















// const express =require("express")
// const app = express()
// const {isAdminAuth , isUserAuth } =require("./middlewares/auth")

// app.use("/admin" ,isAdminAuth )
// app.use("/user"  , isUserAuth)


// app.get("/admin/getAlldata" ,(req , res)=>{
//   res.send("all data is sent success")


// })

// app.delete("/admin/deleteData"  ,(req  , res)=>{
//   res.send("data deleted")
// })
// app.get("/user/getAlldata" ,(req , res)=>{
//   res.send("all data is sent success")


// })

// app.delete("/user/deleteData"  ,(req  , res)=>{
//   try{
//     res.send("data deleted")
//   }
//   catch(err){
//     res.status(500).send("some error contact support team")
//   }
  
// })

// app.use("/"   ,(err , req ,res ,next)=>{
//   if(err){
//     res.status(500).send("something went wrong")
//   }
// })

// app.listen(3000 , ()=>{
//   console.log("the server is running on the poet 3000")
// })
















// mthosd 1



// const express =require("express")
// // require("./config/database")
// // const connectDb = require("./config/database")
// const app =express()

// // connectDb().then(()=>{
// //   console.log("connected to db")
// //   app.listen(3000 , ()=>{
// //   console.log("sever is connected to port 3000")
// // })
// // }).catch((err)=>{
// //   console.log("database not connected")
// // })
// require("./config/database")


// app.listen(3000 ,()=>{
//   console.log("server is runnin on the [poprt 3000")
// })



// const express =require("express")
// const app = express()

// const connectDb = require("./config/database")
// const User = require("./models/user")



// app.post("/signup" , async(req ,res)=>{
//     const userObj = {
//       firstName:"virat",
//       lastName:"kohli",
//       email:"virantsinghan5@gmail.com",
//       password:"12345678"

//     }

//     try{
//       // creating a instance of the user model
//     const user = new User(userObj)
//     await user.save();
//     res.send("user added successfully")
//     }
//     catch(err){
//       res.status(400).send("Error saving the database:"+ err.message)
//     }
    
// })



// connectDb().then(()=>{
//   console.log("database is connected successfully")
//   app.listen(3000, ()=>{
//   console.log("server is runnin on the port 3000")
// })
// }).catch((err)=>{
//   console.log("server is not conneted successful;ly")
// })






















const express =require("express")
const app = express()

const connectDb = require("./config/database")
const User = require("./models/user")

app.use(express.json())


app.post("/signup" , async(req ,res)=>{
    

  const user = new User(req.body)
  try{
    await user.save();
    res.send("user added successfully")
  }
  catch(err){
    res.status(400).send("error saving the user" +err.message)
  }
    
})



connectDb().then(()=>{
  console.log("database is connected successfully")
  app.listen(3000, ()=>{
  console.log("server is runnin on the port 3000")
})
}).catch((err)=>{
  console.log("server is not conneted successful;ly")
})

