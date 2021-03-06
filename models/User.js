const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, min:2, max:250},
    email: {type:String, required: true,unique: true, min:2, max:250 },
    password: {type:String, required: true, min:7, max:1024},
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("User", UserSchema);