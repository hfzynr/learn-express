const { animal : animals } = require("../../models")

module.exports = {
    getAll: (req,res) => {
        res.send(animals)
    },
    getById: (req, res) => {
        const findOne = animals.find(item => {
            return item.id === Number(req.params.id)
        })
        
        res.send(findOne)
    },

    deleteOne: (req,res) => {
        let newAnimal = animals.filter(
            item => item.id !== parseInt(req.params.id)
        )

        res.send(newAnimal)
    }
}