var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservation list
var reservations = [
    {
      name: "Bryan",
      phoneNumber: "666-666-6666",
      email: 'b@b.com',
      id: 2000
    }
];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
  
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

// Displays all reservations
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

// Create new reservation - takes in JSON input
app.post("/api/reservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newRes = req.body;
  
    console.log(newRes);
  
    reservations.push(newRes);
  
    res.json(newRes);
});

// Server Starts to listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });