const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  googleId: String, //this is the ID that google return
  facebookId: String,
  secret: String,
});

//hash the password before store
UserSchema.pre('save', async function (next) {
  const user = this;
  if (!user.password) {
    next();
  }
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  //Hashes the password sent by the user for login and checks if the hashed password stored in the
  //database matches the one sent. Returns true if it does else false.
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

module.exports = mongoose.model('user', UserSchema);
