const { get } = require("../../config")

const signin = async ({ email, password }) => {
    try {
        const result = {}
        const data = await get()
            .collection("user")
            .findOne({ email:email })
            .then(async result => {
                const compared = await comparedPassword(
                    password,
                    result.password
                )

                return compared
            })
        
    if (!email) {
        result.email = "Wajib Isi Email"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        result.email = "Format email salah"
    } else if (email) {
        if (data) {
            result.email = "Alamat email ini sudah ada"
        }
    }

    if (!password) {
        result.password = "Wajib isi password"
    } else if (password.length < 8) {
        result.password = "Password minimal 8 karakter"
    }

    return result
    } catch (error) {
        throw error
    }
}

module.exports = signin