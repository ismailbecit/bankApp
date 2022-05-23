const Account = require("../models/Account")
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

const newUser = async (data) => {
    try {
        const user = await User.create({
            name: data.name,
            surname: data.surname,
            email: data.email,
            password: data.password,
            phone: data.phone,
            age: data.age
        })
        return new Promise((resolve, reject) => {
            resolve(user)
        })
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error.message)
        })
    }
}

const loginUser = async (req) => {
    try {
        const user = await User.findOne({ phone: req.phone })
        if (user !== null) {
            const some = await bcrypt.compare(req.password, user.password)
            if (some) {
                const token = await jwt.sign({ user }, "secretkey")

                return new Promise((resolve, reject) => {
                    resolve({
                        user,
                        token
                    })
                })
            } else {
                return new Promise((resolve, reject) => {
                    reject("Telefon Numara Veya Şifre Hatalı")
                })

            }
        } else {
            return new Promise((resolve, reject) => {
                reject("Telefon Numara Veya Şifre Hatalı")
            })
        }
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
}

const balanceCheck = async (req) => {
    try {
        const account = await Account.findOne({ user: req.userID })
        if (account) {
            if (account.ballance < req.amount) {
                console.log("gelidiididi")
                return new Promise((resolve, reject) => {
                    reject("Bakiye Yetersiz")
                })
            } else {
                console.log("gelidiididi222222222")
                return new Promise((resolve, reject) => {
                    resolve(account)
                })
            }
        } else {
            return new Promise((resolve, reject) => {
                reject("Kullanıcı Bulunamadı Giriş Yapınız")
            })
        }
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
}
module.exports = {
    newUser,
    loginUser,
    balanceCheck
}