import express from 'express';
import {apiRoutes} from './routes/router.js';
import { sequelize } from './config/sequelize.js';
import bodyParser from 'body-parser';
const {pkg} = bodyParser;
const app= express()
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json())

const PORT= process.env.PORT||3003
app.use('/api',apiRoutes)


app.listen(PORT,()=>console.log(`the server runing on ${PORT}`))

