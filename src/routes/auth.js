const express = require("express")
const authRouter = express.Router()
const {validatesignupdata} = require("../utils/validation")
const validator = require("validator")
const User = require("../models/user")
const bcrypt = require("bcrypt")

authRouter.post("/signup", async (req, res) => {
  try {
    //validation of data required
    validatesignupdata(req)

    const { firstName, lastName, email, password } = req.body
    //encrypt the password
    const passwordHash = await bcrypt.hash(password, 10)
    console.log(passwordHash)

    //never trust the req.body
    const user = new User({ firstName, lastName, email, password: passwordHash })
    const saveuser = await user.save()
    const token = await saveuser.getJWT()

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Set to true in production with HTTPS
      sameSite: "lax",
      expires: new Date(Date.now() + 8 * 3600000) // 8 hours
    })
    
    // Send JSON response
    res.status(200).json({ 
      message: "User added successfully",
      user:saveuser
    })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

// FIXED LOGIN ROUTE - Returns JSON instead of text/html
authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Log received data for debugging
    console.log("Login attempt:", { email, password: "***" });
    
    // Validate email
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ 
        message: "Invalid email format" 
      });
    }
    
    // Check if password is provided
    if (!password) {
      return res.status(400).json({ 
        message: "Password is required" 
      });
    }
    
    // Find user
    const user = await User.findOne({ email })
    if (!user) {
      console.log("User not found:", email);
      return res.status(401).json({ 
        message: "Invalid credentials" 
      });
    }

    // Verify password
    const isPasswordValid = await user.verifyPassword(password)
    
    if (isPasswordValid) {
      // Generate JWT token
      const token = await user.getJWT()
      
      // Set cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: false, // Set to true in production with HTTPS
        sameSite: "lax",
        expires: new Date(Date.now() + 8 * 3600000) // 8 hours
      })
      
      // Send JSON response
      res.status(200).json({ 
        message: "Login successful",
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          skills: user.skills,
          about: user.about,
          photoUrl: user.photoUrl,
          gender: user.gender,
          age: user.age

        },
        token: token // Optional: send token for client-side storage
      })
    } else {
      console.log("Invalid password for user:", email);
      return res.status(401).json({ 
        message: "Invalid credentials" 
      });
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(400).json({ 
      message: "Login failed",
      error: err.message 
    });
  }
})

authRouter.post("/logout", (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now())
  })
  res.status(200).json({ 
    message: "Logout successful" 
  })
})

module.exports = authRouter