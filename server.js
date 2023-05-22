const express=require('express')
const app=express()
const dotenv=require('dotenv')
const morgan=require('morgan')
const path=require('path')
const bodyParser = require('body-parser')
dotenv.config({path:'config.env'})
const PORT=process.env.PORT || 8000
const conncetDB=require('./server/database/connection')


app.use(bodyParser.urlencoded({extended:true}))
//show requsets in console.log
app.use(morgan('tiny'))

// set view engine
app.set('view engine','ejs'); 

//mongodb connection
conncetDB()

// load assets files
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.join(__dirname, 'assets/js')));

//load routers
app.use('/',require('./server/routes/router'))


app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`))