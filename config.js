import dotenv from 'dotenv'
import getenv from 'getenv'

// load env file
dotenv.config()

export const apiConfig = getenv.multi({
  host: 'API_HOST',
  port: 'API_PORT',
  auth: ['API_AUTH', false]
})

// export server configuration
export default getenv.multi({
  env: 'NODE_ENV',
  host: 'SERVER_HOST',
  port: 'SERVER_PORT'
})
