const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("UserData", UserSchema);
