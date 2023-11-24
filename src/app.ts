import express, { Application } from 'express'
import cors from 'cors'

// initialize express app
const app: Application = express()

// initialize express parser
app.use(express.json())
app.use(cors())

export default app
