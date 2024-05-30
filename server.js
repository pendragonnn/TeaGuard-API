const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const allRoutes = require("./src/routes/index.routes")
dotenv.config()

const app = express();

const appPort = process.env.APP_PORT
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(allRoutes)
 
app.listen(appPort, () => {
    console.log(`Server running in http://localhost:${appPort}`)
})