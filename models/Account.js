const mongoose = require("mongoose")

const AccountSchema = new mongoose.Schema({
    iban: { type: String, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
    ballance: { type: Number, default: 0 }
})
const Account = mongoose.model("Account", AccountSchema)
module.exports = Account
