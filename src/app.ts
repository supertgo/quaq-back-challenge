import express from 'express'
import config from 'config'
import connect from './utils/connect'
import routes from './routes'
import swagger from 'swagger-ui-express'
import swaggerDocs from './swagger.json'
import deserializeUser from './middleware/ deserializeUser'


const port = config.get<number>('port')

const app = express();
app.use(express.json())
app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs))
app.use(deserializeUser)

app.listen(port, async() => {
  console.log('App is running');
  await connect()
  routes(app)
})