const mongoose = require("mongoose")
const Account = require("./Account")
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    account: { type: mongoose.Schema.Types.ObjectId, ref: "Account", unique: true },

})

UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        this.password = hash
        next()
    })
})

UserSchema.post("save", async function (doc, next) {
    const account = await Account.create({
        user: doc._id,
        iban: Math.floor(Math.random() * 9000000000000000 + 1000000000000000)
    })
    await User.updateOne({ _id: doc._id }, {
        account: account._id
    })
    console.log(account, "acooounnnntnntnt")
    next()
})
const User = mongoose.model("User", UserSchema)
module.exports = User