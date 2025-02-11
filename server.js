const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load environment variables
dotenv.config();

const app = express();

// ✅ Configure CORS to allow frontend (Both Localhost & Deployed)
const allowedOrigins = [
  "http://localhost:5173",  // Local development
    // Replace with your actual Vercel frontend URL
];

app.use(cors({
  origin: allowedOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}));

app.use(express.json()); // Enable JSON parsing

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(error => {
  console.error("❌ Error connecting to MongoDB:", error);
  process.exit(1);
});

// ✅ Import Routes
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");
const demoRoutes = require("./routes/demoRoutes");
const teacherRoutes = require("./routes/teacherRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/demo", demoRoutes);
app.use("/api/teachers", teacherRoutes);

// ✅ Teacher Registration Route
const Teacher = require("./models/Teacher");
app.post("/api/teachers/register", async (req, res) => {
  try {
    const { fullName, subject, experience, contact, qualification } = req.body;
    
    if (!fullName || !subject || !experience || !contact || !qualification) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingTeacher = await Teacher.findOne({ contact });
    if (existingTeacher) {
      return res.status(400).json({ error: "Teacher already registered" });
    }

    const newTeacher = new Teacher({ fullName, subject, experience, contact, qualification });
    await newTeacher.save();
    res.status(201).json({ message: "Teacher registered successfully" });

  } catch (error) {
    console.error("❌ Teacher Registration Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Book a Demo Route
const DemoBooking = require("./models/DemoBooking");
app.post("/api/demo/book", async (req, res) => {
  try {
    const { fullName, classCourse, board, mobile, email } = req.body;

    if (!fullName || !classCourse || !board || !mobile || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newDemo = new DemoBooking({ fullName, classCourse, board, mobile, email });
    await newDemo.save();
    res.status(201).json({ message: "Demo class booked successfully" });

  } catch (error) {
    console.error("❌ Demo Booking Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("🎉 Welcome to the Home Tuition API!");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
