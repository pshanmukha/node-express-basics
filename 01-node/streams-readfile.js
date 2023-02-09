const { writeFileSync, createReadStream } = require('fs')

for(let i=0; i<10000; i++) {
    writeFileSync('./content/big.txt', `hello world' ${i}\n`, {flag: 'a'})
}

const stream =  createReadStream('./content/big.txt', 
{highWaterMark: 90000, encoding: 'utf8'})
var data = 0;
//by dfault size of buffer is 54kb
//last buffer - remainder
stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('data', (chunk)=>{
    console.log(`received ${chunk.length} bytes of data.}`)
    console.log(`received ${chunk.length / 1024} kb of data.}`)
    data = data + chunk.length;
    console.log(`Total received ${data/ 1024} kb of data.}`)
})

stream.on('error', (error) => console.log(error.message))
