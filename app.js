const express = require("express")
const app = express()
const conn = require("./config/db")
const router = require("./routers/routers")

//db
conn

//middleware
app.use(express.urlencoded({ extendend: true }))
app.use(express.json())

//routers
app.use("/", router)
//listen
app.listen(3000, () => {
    console.log(`Server started on port`);
});