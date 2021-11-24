require('dotenv').config()

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

export default {
  port: 1337,
  dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.glsqt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: ``,
  privateKey: ``
}

