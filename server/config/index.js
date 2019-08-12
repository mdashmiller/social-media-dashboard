const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  dbURI: process.env.DB_URI
}
