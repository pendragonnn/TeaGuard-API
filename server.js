const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const allRoutes = require("./src/routes/index.routes")
const path = require('path')
const apiDocs = require('./src/doc/apidocs_swagger.json')
const swaggerUi = require('swagger-ui-express');
const rateLimit = require('./src/middleware/rate.limit');

dotenv.config()

const app = express();

const appPort = process.env.APP_PORT
app.use(rateLimit)
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/publics', express.static(path.join(__dirname, 'publics')));
app.use(allRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocs));

app.listen(appPort, () => {
    console.log(`Server running in http://localhost:${appPort}`)
});