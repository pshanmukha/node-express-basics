const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

//using thirdparty middleware
app.use(morgan('tiny'))

//multiple routes using logger
app.get('/',(req,res) => {
  res.status(200).send("Home")
})

app.get('/products',(req,res) => {
  res.status(200).send("Products")
})

app.get('/products/reviews',(req,res) => {
  res.status(200).send("Reviews")
})

app.get('/about',(req,res) => {
  res.status(200).send("About")
})

app.listen(5000, ()=>{
  console.log('server is listening on port 5000')
})