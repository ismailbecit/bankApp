const mongoose = require("mongoose")

const TransferRecordSchema = new mongoose.Schema({
    payer: { type: String, required: true },
    taker: { type: String, required: true },
    amount: Number,
    description: String,

})
const TransferRecord = mongoose.model("Transfer", TransferRecordSchema)
module.exports = TransferRecord