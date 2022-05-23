const service = require("../services/transferRecord")
const newTransfer = async (req, res) => {
    req.body.userID = req.userInfo.user._id
    try {
        await service.newTransfer(req.body)
        return res.status(201).json({
            message: "Transfer İşlemi Başarıyla Gerçekleştirildi",
        })
    } catch (error) {
        return res.status(400).json({
            "errors": error
        })
    }
}
module.exports = {
    newTransfer
}