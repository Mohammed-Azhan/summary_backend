const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})
module.exports = mongoose.model("User", userSchema);