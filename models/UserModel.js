const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
  {
    slackUsername: { type: String, required:true},
    backend: { type: Boolean, required:true},
    age: { type: Number, required:true},
    bio: { type: String, required:true}

    //{ "slackUsername": String, "backend": Boolean, "age": Integer, "bio": String }
  }
);

const company = mongoose.model('EnumOpretion', userSchema);
module.exports = company;
