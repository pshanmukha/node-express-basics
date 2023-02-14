const http = require('http')
const {readFileSync} = require('fs')

//get all files
const homePageHTMLFile = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
//method object gives the what operaton client is asking
//ex: GET, POST
 console.log(req.method)
//url gives clients requested url
//ex: / , contact, about
console.log(req.url)
 const url = req.url
 //homepage
 //sending 202 status code, since we are fullfilled the request
 //once all the data is sended, end the connection
 if(url === '/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePageHTMLFile)
    res.end('server sended all the data, so closing the server')
 } 
 //about page
 //sending 202 status code, since we are fullfilled the request
 //once all the data is sended, end the connection
 else if(url === '/about'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>About Page</h1>')
    res.end('server sended all the data, so closing the server')
 }
 // styles
 else if (url === '/styles.css') {
   res.writeHead(200, { 'content-type': 'text/css' })
   res.write(homeStyles)
   res.end()
 }
  // image/logo
  else if (url === '/logo.svg') {
   res.writeHead(200, { 'content-type': 'image/svg+xml' })
   res.write(homeImage)
   res.end()
 }
  // logic
  else if (url === '/browser-app.js') {
   res.writeHead(200, { 'content-type': 'text/javascript' })
   res.write(homeLogic)
   res.end()
 }
 //we didnt found requested data
 //so,sending 202 status code, since we are not fullfilled the request
 //once all the data is sended, end the connection
 else {
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>Page not found</h1>')
    res.end('server sended all the data, so closing the server')
 }
})

server.listen(5000)