const express = require("express")
const diseaseRoutes = require("./diseases.routes")
const diseaseDetailRouters = require("./diseaseDetail.routes")
const router = express.Router()

router.use("/v1/disease", diseaseRoutes)
router.use("/v1/disease_details", diseaseDetailRouters)

module.exports = router