"use strict";

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const appModule = require("./app");
const app = appModule.app;

// Only log when running locally, not in production/Vercel
if (process.env.NODE_ENV !== "production") {
  console.log("Running on http://localhost:" + PORT);
  console.log("\nST Connector configuration:");
  console.log("Client ID:           " + appModule.EXPECTED_CLIENT_ID);
  console.log("Client Secret:       " + appModule.EXPECTED_CLIENT_SECRET);
  console.log("Authorization URI:   " + appModule.AUTH_REQUEST_PATH);
  console.log("Refresh Token URL:   " + appModule.ACCESS_TOKEN_REQUEST_PATH);
  console.log("Access Token Prefix: " + appModule.ACCESS_TOKEN_PREFIX);

  // Start server for local development
  app.listen(PORT);
}

module.exports = app;
