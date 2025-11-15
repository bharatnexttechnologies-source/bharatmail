// server.js - Simple static file server for BharatMail
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

// Serve public static files
app.use(express.static(path.join(__dirname, "public")));

// Root and SPA fallback
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Include explicit route for callback if you named it auth-callback.html
app.get("/auth-callback", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "auth-callback.html"));
});

// app.html route if present
app.get("/app.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "app.html"));
});

// Fallback for any path (SPA friendly)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 BharatMail server listening on port ${PORT}`);
});
