const repo = require("../repository/transferRecord")
const userRepo = require("../repository/user")
const newTransfer = async (req) => {
    if (req.payer === req.taker) {
        return new Promise((resolve, reject) => {
            reject("Alıcı Ve Gönderici Hesapları Aynı Olamaz")
        })
    }
    try {
        const user = await userRepo.balanceCheck(req)
        await repo.IbanCheck(req)
        await repo.newTransfer(req)
        return new Promise((resolve, reject) => {
            resolve("Trasnfer İşlemi Gerçekleştirildi")
        })

    } catch (error) {
        console.log("cahcek düştü", error)
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
}
module.exports = {
    newTransfer
}