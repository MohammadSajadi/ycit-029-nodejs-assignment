const express = require("express");

const app = express();

const data = [
    {
        id: 1,
        name: "John Doe",
        age: 32,
    },
    {
        id: 2,
        name: "Jane Doe",
        age: 30,
    },
    {
        id: 3,
        name: "John Smith",
        age: 25,
    },
];

// This route gets *ALL* the users
app.get("/api/users", (req, res) => {
    res.json(data);
});

// Add a new route to get a *SINGLE* user (you can use either path param or query param)
// /api/users/1      <-- path param (req.params.id)
// /api/users?id=1   <-- query param (req.query.id)

app.get('/api/users/:id', (req, res) => {
    if ( req.params['id'] === '1') {
        res.send(data[0])
    } else if ( req.params['id'] === '2') {
        res.send(data[1])
    } else if ( req.params['id'] === '3') {
        res.send(data[2])
    } else {
        res.send("user not found")
    }
  });
    
// BONUS QUESTION - Add routes to implement all the CRUD operations (POST, PUT, DELETE)

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
