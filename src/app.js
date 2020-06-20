//import app from 'express'
import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import routes from './routes'

const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use('/api/v1', routes)

export default app
