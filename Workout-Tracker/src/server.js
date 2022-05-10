// Import Express & Path Packages
const express = require("express");
const path = require("path");
// Initialize express
const app = express();
// Serve static build files from the "dist" directory
app.use(express.static("./dist/workout-tracker"));
// Route incoming server requests to the correct files
app.get("/*", (req, res) =>
 res.sendFile("index.html", { root: "dist/workout-tracker/" })
);
// Start the app on the default Heroku p
