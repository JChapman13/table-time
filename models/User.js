const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    // reservations: [reservationSchema],
    categories: Array,
    favourites: Array,
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

mongoose.model("User", UserSchema);

module.exports = mongoose.model("User", UserSchema);
