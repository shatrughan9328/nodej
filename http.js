const http=require('http');
const fs =require('fs');
const app=http.createServer((req,res)=>{
if(req.url=='/'){
    fs.readFile('index.html',(er,data)=>{
        if(er) throw er;
        res.end(data);
    })
}
else if(req.url=='/about'){
    res.end("<h1>about page</h1>") 
    
}
 });  // server created
console.log(app);
const port=5000;

app.listen(port,()=>{
    console.log("server started and running on http://localhost:5000");
}  )

