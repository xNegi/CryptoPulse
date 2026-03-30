
// Connection of Frontend with server.js

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static("public"));

// MongoDB connection
mongoose.connect("mongodb+srv://aryannegi526:aryannegi10@cluster0.wf79gcw.mongodb.net/?appName=Cluster0") 
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  number: String,
  password: String
});

const User = mongoose.model("User", userSchema);

// POST
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { firstName, lastName, username, email, number, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      number,
      password: hashedPassword
    });

    await newUser.save();

    res.json({
      message: "User created",
      user: newUser
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Signup failed" });
  }
});

// GET
app.get("/api/auth/signup", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


// Login page backend work

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // 🔴 important check
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login successful",
      user: user
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});