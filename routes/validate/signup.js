const { get } = require("../../config")

const signup = async ({ email, password, firstName, lastName }) => {
    try {
        const result = {}
        const data = await get()
            .collection("user")
            .findOne({ email:email })

        if (!email) {
            result.email = "Wajib Isi Email"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            result.email = "Format email salah"
        } else if (email) {
            if (data) {
                result.email = "Alamat email sudah ada"
            }
        }

        if (!password) {
            result.password = "Wajib Isi Password"
        } else if (password.length < 8) {
            result.password = "Password minimal 8 karakter"
        }

        if (!firstName) {
            result.firstName = "Wajib Isi First Name"
        }

        if (!lastName) {
            result.lastName = "Wajib isi Last Name"
        }

        return result
    } catch (error) {
        throw error
    }
}

module.exports = signup