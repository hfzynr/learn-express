const express = require("express")
const router = express.Router()

const animalController = require("./controller")

router.get("/", animalController.getAll)
router.get("/one", animalController.getOne)
router.delete("/", animalController.deleteOne)
router.post("/", animalController.addOne)
router.put("/one/:id", animalController.updateOne)

module.exports = router