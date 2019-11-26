const express = require("express")
const router = express.Router()

const animalController = require("./controller")

router.get("/", animalController.getAll)
router.get("/:id", animalController.getById)
router.delete("/:id", animalController.deleteOne)

module.exports = router