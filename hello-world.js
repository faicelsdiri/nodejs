const fs = require('fs')
const http = require('http')
http.createServer((req,res)=>{
    fs.readFile('./hello.txt','utf-8',(err,data) => {
        try 
        {
           console.log(data)
           res.write(`<h1> ${data} </h1>`)
           res.end()
          
       }
       catch {
           console.log(err)
       }
    })
    
}).listen(3000,console.log('Server is running'));


