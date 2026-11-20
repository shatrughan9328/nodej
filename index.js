let a=20;

try{
    let c= a/0;
    console.log(c);
}catch(er){
    console.error(er);
    console.log("error occured");

}

finally{
    console.log("always run !");
}