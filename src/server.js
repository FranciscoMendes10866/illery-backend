// ENV VARS
require('dotenv').config()

const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const port = process.env.PORT || 3333
const routes = require('./routes')

app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use('/api/v1', routes)

app.listen(port)
