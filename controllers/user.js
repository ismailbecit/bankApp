const service = require("../services/user")
const newUser = async (req, res) => {
    try {
        const user = await service.newUser(req.body)
        return res.status(201).json({
            message: "Kayıt Başarıyla Oluşturuldu",
            data: user
        })
    } catch (error) {
        return res.status(400).json({
            "errors": error
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const user = await service.loginUser(req.body)
        return res.status(200).json({
            message: "Giriş Başarılı",
            data: user
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}
const UserInfo = async (req, res) => {
    try {
        return res.status(200).json({
            message: "Giriş Başarılı",
            data: req.userInfo
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}

module.exports = {
    newUser, loginUser, UserInfo
}