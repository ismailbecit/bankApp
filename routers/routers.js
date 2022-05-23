const express = require("express")
const router = express.Router()
const UserController = require("../controllers/user")
const TransferController = require("../controllers/trasfer")
const Jwt = require("../middleware/Jwt")

const User = router
User.route("/register").post(UserController.newUser)
User.route("/login").post(UserController.loginUser)
User.route("/info").get(Jwt, UserController.UserInfo)

const Transfer = router
Transfer.route("/transfer").post(Jwt, TransferController.newTransfer)

module.exports = router