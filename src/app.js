// console.log("startting a new project");

// const express = require("express");

// const app = express();

// // app.use("/test" , (req , res)=>{
// //     res.send("hello from the server")
// // })

// // app.use("/start" , (req , res)=>{
// //     res.send("start from the server")
// // })

// // app.get("/user" , (req , res)=>{
// //     console.log(req.query)
// //     res.send("this is get call for the server")
// // })

// // app.post("/user/:userID/:name/:college" ,(req ,res)=>{
// //     res.send("data sended successfully")
// //     console.log(req.params)
// // })

// // app.delete("/user" , (req , res)=>{
// //     res.send("data deleted successsfully")
// // })

// // app.use("/" , (req , res)=>{
// //     res.send("hchachaer")
// // })

// // app.use("/user" ,()=>{
// //      //this i scaalled ROUTEW HANDLER

// // })

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





const express = require("express")

const app =express();

app.get("/admin/getALLData" , (req ,res)=>{
    //check if thei req is authorized
    //logic ofchecking 
    res.send("ALL data sent")
})

app.get("/admin/deleteUser" , ()=>{
    console.log("deleted the user successfullt")
})

app.listen(7777 , ()=>{
    console.log("server  is successffully listening to the port 7777")
})