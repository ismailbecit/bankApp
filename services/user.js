const repo = require("../repository/user")
const newUser = async (data) => {
    try {
        const user = await repo.newUser(data)
        return new Promise((resolve, reject) => {
            resolve(user)
        })
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
}

const loginUser = async (data) => {
    try {
        const user = await repo.loginUser(data)
        return new Promise((resolve, reject) => {
            resolve(user)
        })
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
}


module.exports = {
    newUser, loginUser
}