const mongoose = require("mongoose")
const Schema = mongoose.Schema


const usersDataSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    age: Number,
    country: String,
    gender: String,
},
    { timestamps: true }
)

const MydataUser = mongoose.model("usersData", usersDataSchema)
module.exports = MydataUser