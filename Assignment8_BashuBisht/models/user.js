const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const validateEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return re.test(password);
};

const validatename = (name) => {
  var re = /^[a-zA-Z ]{2,30}$/;
  return re.test(name);
};

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: [validatename, "Please enter a valid name"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
    validate: [validatePassword, "Enter a valid password. Password must be more than 5 characters, requires a capital character and a number"],
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

module.exports = mongoose.model("User", userSchema);
