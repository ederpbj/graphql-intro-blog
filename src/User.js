//criar o Schema do Mongoose para o User

const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
 name: String,
 email: String
});

module.exports = mongoose.model("User", UserSchema);