const express = require("express")
const router = express.Router()

const animalController = require("./controller")

router.get("/", animalController.getAll)
router.delete("/", animalController.deleteOne)
router.post("/", animalController.addOne)
router.get("/one", animalController.getOne)
router.put("/one/:id", animalController.updateOne)

module.exports = router