const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "dist" folder (after running "npm run build")
app.use(express.static(path.join(__dirname, "dist")));

// Handle React routing, return index.html for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('🚀 Frontend server is running on port ${PORT}');
});