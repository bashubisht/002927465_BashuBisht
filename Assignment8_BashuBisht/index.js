const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://bashu:dbmaster123@usercluster.g5nqfhc.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Database connection established!");
  });

app.get('/hello', (req,res) => {
  res.status(200).json({
    message: "Hello World!!"
  })
})

app.post("/user/create", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user.save().then(() => {
      res.status(200).json({
        message: "User Created!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

app.get("/user/getAll", (req, res, next) => {
  User.find().select(["-name"]).then((documents) => {
      res.status(200).json({
        message: "Users fetched successfully!",
        users: documents,
      });
    });
});

app.put("/user/edit", (req, res, next) => {
  if (req.body.email) {
    User.find({ email: req.body.email }, (err, user) => {
      if (user.length > 0) {
        const newUser = new User({
          _id: user[0]._id,
          name: req.query.name,
          email: req.body.email,
          password: req.query.password,
        });
        User.findOneAndUpdate({ email: req.body.email }, newUser, {
          runValidators: true,
        })
          .then((result) => {
            console.log(result);
            res.status(200).json({ message: "User updated!" });
          })
          .catch((err) => {
            res.status(500).json({
              message: err.message,
            });
          });
      } else {
        res.status(200).json({ message: "User not found!" });
      }
    });
  } else {
    res.status(200).json({ message: "Please provide an email!" });
  }
});

app.delete("/user/delete", (req, res, next) => {
  if (req.body.email) {
    User.find({ email: req.body.email }, (err, user) => {
      if (user.length > 0) {
        User.deleteOne({ email: req.body.email }).then((result) => {
          console.log(result);
          res.status(200).json({ message: "User deleted!" });
        });
      } else {
        res.status(200).json({ message: "User not found!" });
      }
    });
  } else {
    res.status(200).json({ message: "Please provide an email!" });
  }
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});