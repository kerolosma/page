// Require the express application framework
const express = require("express");

// Create an app instance from the express library
const app = express();

// Define the port number to use
const port = 3400;

// Create an object to hold the data coming from the client side
let projectData = {};

// Use the express middleware to parse incoming data
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data

// Use the website folder as the initial path for our files
app.use(express.static("website"));

// Enable CORS to allow other HTTP/S requests from different domains
const cors = require("cors");
app.use(cors());

// POST endpoint to receive data from the client
app.post("/add", async (req, res) => {
  projectData = req.body;
  res.send(projectData);
});

// GET endpoint to send the data back to the client
app.get("/all", async (req, res) => {
  res.send(projectData);
});

// Start listening for requests on the specified port
app.listen(port, () => console.log(`Server is listening on port ${port}`));
