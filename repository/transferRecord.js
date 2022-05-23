const TransferRecord = require("../models/TransferRecord")
const Acconut = require("../models/Account")
const User = require("../models/User")


const newTransfer = async (req) => {
    try {
        console.log("gelen reqqq", req)
        const payer = await Acconut.findOne({ iban: req.payer })
        console.log("gelen reqqq", req.amount, "payerrrr", payer.ballance)
        payer.ballance = payer.ballance - req.amount
        await payer.save()
        const taker = await Acconut.findOne({ iban: req.taker })
        taker.ballance = taker.ballance + req.amount
        await taker.save()
        const trasnfer = await TransferRecord.create({
            taker: req.taker,
            payer: req.payer,
            amount: req.amount,
            description: req.description
        })

        return new Promise((resolve, reject) => {
            resolve(trasnfer)
        })
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
}

const IbanCheck = async (req) => {
    console.log("takerrrdfffffrrrrrrrr", req)
    try {
        const taker = await Acconut.findOne({ iban: req.taker })
        const payer = await Acconut.findOne({ iban: req.payer })

        if (taker !== null && payer !== null) {
            return new Promise((resolve, reject) => {
                resolve(taker, payer)
            })
        } else {
            return new Promise((resolve, reject) => {
                reject("Alıcı Veya Satıcı Iban Bulunamadı")
            })
        }


    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }

}
module.exports = {
    newTransfer, IbanCheck
}