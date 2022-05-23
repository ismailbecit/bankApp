const jwt = require("jsonwebtoken")

const Jwt = async (req, res, next) => {
    const beaberHeader = req.headers["authorization"]
    if (beaberHeader !== undefined) {
        const beaberToken = beaberHeader?.split(" ")[1]
        jwt.verify(beaberToken, "secretkey", (err, token) => {
            if (err) {
                res.status(400).json({ message: "Tanımlanamayan Token" })
            } else {
                req.userInfo = token
                next()
            }

        })

    } else {
        next()
    }

}
module.exports = Jwt