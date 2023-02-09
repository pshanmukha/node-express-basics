  //OS module
  const os = require('os');
  
  //userInfo 
  const user = os.userInfo()
  console.log(user)

  //uptime function
  console.log("system uptime: " + os.uptime)

  //creating own object from the os object
  const currentOS = {
    name: os.name,
    release: os.release(),
    hostname: os.hostname(),
    platform: os.platform(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
    loadavg: os.loadavg(),
  }

  console.log(currentOS)