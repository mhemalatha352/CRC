require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());
// Test route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Check Mongo URI
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing. Check your .env file");
  process.exit(1);
}

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  careerAttempts: [
    {
      career: String,
      score: Number,
      date: { type: Date, default: Date.now }
    }
  ]
});

const User = mongoose.model("User", userSchema);

// Routes
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email & password required" });
  }

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email, password, careerAttempts: [] });
      await user.save();
    } else if (user.password !== password) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/career-attempt", async (req, res) => {
  const { email, career, score } = req.body;

  if (!email || !career || score === undefined) {
    return res.status(400).json({ message: "Missing data" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    user.careerAttempts.push({ career, score });
    await user.save();

    res.json({ message: "Career attempt saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/profile/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Connect DB then start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed", err);
    process.exit(1);
  });
