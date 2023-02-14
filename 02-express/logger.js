

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next() 
  }

  //exporting this logger module to make it avaible 
  //everyever we want in project
  module.exports = logger