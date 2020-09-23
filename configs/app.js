const path = require('path')
const processEnvironment = require('dotenv').config({ path: path.resolve(__dirname, `../${process.env.NODE_ENV}.env`) })
console.log(process.env.NODE_ENV)
module.exports = {
  port: processEnvironment.parsed.PORT || 3000,
  isProduction: process.env.NODE_ENV === 'production',
  apiVersion: processEnvironment.parsed.API_VERSION || 1,
  token_exp_days: processEnvironment.parsed.TOKEN_EXP_DAYS || 1,
  secret: processEnvironment.parsed.NODE_ENV === 'production' ? process.env.SECRET : 'my-secret',
  mongodbUri: processEnvironment.parsed.MONGODB_URI,
  pageLimit: processEnvironment.parsed.PAGE_LIMIT || 15,
  trustURL: processEnvironment.parsed.TRUST_URL,
  trustUserName: processEnvironment.parsed.TRUST_USER_NAME,
  trustPassword: processEnvironment.parsed.TRUST_PASSWORD
}