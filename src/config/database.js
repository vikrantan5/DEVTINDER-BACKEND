// mongodb+srv://e-com:LCqtETDx9qGi0S2f@cluster0.8fq8yez.mongodb.net/?appName=Cluster0



// const mongoose = require("mongoose")


// const connectDB = async()=>{
//     await mongoose.connect("mongodb+srv://e-com:LCqtETDx9qGi0S2f@cluster0.8fq8yez.mongodb.net/mytinder?appName=Cluster0")
// }
// module.exports= connectDB

// connectDB().then(()=>{
//     console.log("database connected successfully")
// }).catch(err=>{
//     console.error("database not connected")
// })



// ======================STEPS==========================




// steps are ---make a config folder in src folder then make a file database.js
// then setup your database
// in foirst you make a simle database connection by simple async await format thein which server will start then database connection establisehd bu  in further we established the connection first between database then server started




// mthod 1---

// const mongoose= require("mongoose")
// const connectDB = async()=>{
//     await mongoose.connect("mongodb+srv://e-com:LCqtETDx9qGi0S2f@cluster0.8fq8yez.mongodb.net/mytinder?appName=Cluster0")
// }

// connectDB().then(()=>{
//     console.log("database connected succesfully")
// }).catch((err)=>{
//     console.log("Error occurred")
// })


// method 2-

const mongoose =require("mongoose")


const connectDB =async ()=>{
    await mongoose.connect("mongodb+srv://e-com:LCqtETDx9qGi0S2f@cluster0.8fq8yez.mongodb.net/mytinder?appName=Cluster0")

}

module.exports =connectDB