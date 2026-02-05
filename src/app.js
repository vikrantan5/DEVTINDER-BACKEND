console.log("startting a new project")


const express = require("express")

const app = express()



app.use("/test" , (req , res)=>{
    res.send("hello from the server")
})

app.use("/start" , (req , res)=>{
    res.send("start from the server")
})




app.use("/" , (req , res)=>{
    res.send("hchachaer")
})



app.listen(3000 , ()=>{
    console.log("the server is running onn 3000")
}) 