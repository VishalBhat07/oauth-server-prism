require("dotenv").config();
const app = require("../app");

// Export the Express API
module.exports = app.app;
