const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define userSchema
const profileSchema = new Schema({
  userName: { type: String, unique: true },
  firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  age: { type: String, unique: false },
  gender: { type: String, unique: false },
  bio: { type: String, unique: false }
});

// Create reference to User & export
const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
