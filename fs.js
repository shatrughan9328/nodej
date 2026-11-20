const a=require("fs");
// a.readFile('one.txt',(er,data)=>{
//     if(er) throw er;
//     console.log(data.toString());
// })

a.unlink('one.txt',(er,data)=>{
    if(er) throw er;
    console.log("file deleted successfully");
}  ) 

