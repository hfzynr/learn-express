const express = require("express")
const router = express.Router()

const userController = require("./controller")

router.get("/", userController.getAll)
router.delete("/", userController.deleteOne)
router.post("/", userController.addOne)
router.get("/one", userController.getOne)
router.put("/one/:id", userController.updateOne)
router.post("/login", userController.login)

module.exports = router