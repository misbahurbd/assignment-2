import dotenv from 'dotenv'
import path from 'path'

// configure dotenv
dotenv.config({
  path: path.join(process.cwd(), '.env'),
})

// export dotenv data with config
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
}
