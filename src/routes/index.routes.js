const express = require("express")
const diseaseRoutes = require("./diseases.routes")
const router = express.Router()

router.use("/v1/disease", diseaseRoutes)

module.exports = router