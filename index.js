/**
 * DegenWatch PRO - Server Entry Point
 * -----------------------------------
 * Lightweight Express server to serve Web3 dashboard
 * No database required
 */

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ==============================
// Middleware
// ==============================

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Parse JSON (future use)
app.use(express.json());

// ==============================
// Routes
// ==============================

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "DegenWatch PRO",
    timestamp: new Date().toISOString(),
  });
});

// Fallback route (SPA support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ==============================
// Server Init
// ==============================

app.listen(PORT, () => {
  console.log(`
🚀 DegenWatch PRO running
🌐 http://localhost:${PORT}
⚡ Environment: ${process.env.NODE_ENV || "development"}
  `);
});
