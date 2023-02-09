const http = require('http')

//Using event emitter API
const server = http.createServer()

//emits request event
//subscribe to it/ listen for it / response to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)