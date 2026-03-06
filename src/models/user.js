

// const mongoose = require("mongoose")


// const userSchema =new mongoose.Schema({
//     firstName:{
//         type:String
//     },
//     lastName:{
//         type:String
//     },
//     emailId:{
//         type:String
//     },
//     password:{
//         type:String
//     },
//     age:{
//         type:Number
//     },
//     gender:{
//         type:String
//     }
// })

// module.exports = mongoose.model("User" , userSchema)





// ==========================STEPS============================

const mongoose =require("mongoose")

const validator = require("validator")

const userSchema =mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:50,
    },
    lastName:{
        type:String,
    },
    email:{
        type: String,
        lowercase:true,
        required: true,
        unique: true ,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email address")
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("this is not aa strong password")
            }
        }

    },
    age:{
        type:Number,
        min:18,
    
    },
    gender:{
        type:String,
        validate(value){ //only created when the doc is created 
            if(!["male" , "female" , "others"].includes(value)){
                throw new Error("Gender data is not valid")
            }
        }
    },
    photoUrl:{
        type:String,
        default:'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740&q=80',
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("this is not a valid URL")
            }
        }
    },
    about:{
        type:String,
        minLength:3,
        maxLength:500,
        default:"this is defaULT DESCRIPTION FOR THE USER"
    },
    skills:{
        type:[String]
    }

} , { timestamps: true })

module.exports=mongoose.model("User" , userSchema)