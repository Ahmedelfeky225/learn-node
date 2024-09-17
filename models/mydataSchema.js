const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    userNameee: String,
})
const Mydata = mongoose.model("Mydataa", dataSchema)
module.exports = Mydata;