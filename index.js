const express = require('express')
const app = express()
const apiRoute = require('./routes/api.routes')
const PORT = 8080 || process.env.PORT
var bodyParser = require('body-parser')
const logger = require('morgan');
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(logger('dev'));
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use('/', apiRoute)

app.listen(PORT, () => {
    console.log("http://localhost:8080")
})