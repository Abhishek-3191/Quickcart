require("dotenv").config(); // Load environment variables from .env.local
const mongoose = require("mongoose");

console.log("MongoDB URI in Next.js:", process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Connection error:", err));
