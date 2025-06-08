const express = require('express')

const cors = require('cors')

const app = express()

const tempDB = [
  {
    email: "abc@gmail.com",
    password: "12345",
  },
];

let username = "selva"
let password = 123
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post("/login", function (req, res) {

    console.log(req.body.username)
    console.log(req.body.password)
    

    if (req.body.username === username && req.body.password == password) {
        res.send(true)
    } else {
        res.send(false)
    }
})

app.listen(3000, function () {
    console.log("Server started..")
})