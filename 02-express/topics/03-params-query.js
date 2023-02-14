const express = require('express')
const {products} = require('./data')
const app = express()

app.get('/',(req, res)=>{
  res.send('<h1> Home Page</h1><a href="/api/products">Products</a>')
})

//sending specific data dynamically using "Params"
app.get('/api/products/:productID', (req, res) => {
  //params comes in string form

  const {productID} = req.params

  const singleProduct = products.find((product) => 
    product.id === Number(productID))

  if(!singleProduct) {
    return res.status(404).send('Product does not exist')
  }
  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send("Hello World")
})

//api may looks like this http://localhost:5000/api/v1/query?search=a&limit=2
app.get('/api/v1/query', (req, res) => {
  console.log(req.query)
  const {search, limit} = req.query
  let sortedProducts = [...products]

  if(search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }

  if(limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  if(sortedProducts.length <  1) {
    return res.status(200).json({success: true, data:[]})
  }

  res.status(200).json(sortedProducts)
})

app.listen(5000, ()=>{
  console.log('server is listening on port 5000')
})