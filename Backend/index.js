const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const users = [
  { username: "selva", password: "123" }
];

// login
app.post("/login", function (req, res) {
  const { username, password } = req.body;

  const matchedUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (matchedUser) {
    res.send(true); 
  } else {
    res.send(false); 
  }
});

// SIGNUP
app.post("/signup", function (req, res) {
  const { email, username, password } = req.body;

  // Check already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).send("User already exists");
  }

  // Add new sign in
  users.push({ email, username, password });
  console.log("New user registered:", { email, username });

  res.status(201).send("User created");
});

// Server start
app.listen(3000, function () {
  console.log("Server started on http://localhost:3000");
});