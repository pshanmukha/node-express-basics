const { readFile, writeFile } = require("fs");

// Reading a file from a given path, 
// then it gives err and result values inside callback function 
// inside this callback function assign result to new variable & 
// read the for second file then 
// inside this callback function assign result to another variable & 
// write the file by concatenating the variables 
// this is called as 'callback hell'
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return 
    }
    console.log(result);
    const first = result

    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return 
        }
        console.log(result);
        const second = result

        writeFile('./content/result-async.txt',
        `Here is the result : ${first}', ${second}`,
        (err,reslt) => {
            if(err){
                console.log(err);
                return 
            }
            console.log('done with this task');
        })
    });
})