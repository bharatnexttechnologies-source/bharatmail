// server.js
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

// Serve static files from "public"
app.use(express.static(path.join(__dirname, "public")));

// SPA fallback: send index.html for unknown routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Auth callback page
app.get("/callback", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "callback.html"));
});

// App page after login
app.get("/app.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "app.html"));
});

// General fallback for any unknown route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 BharatMail Server running on port ${PORT}`);
});
