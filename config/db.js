const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/bankApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const conn = mongoose.connection
module.exports = conn