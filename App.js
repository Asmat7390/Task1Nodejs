const http=require('http');
const url=require('url');
const path = require('path');
const fs=require('fs');

const server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
if(req.url=='/'){
    fs.readFile(path.join(__dirname,"index.html"),function(err,data){
        res.write(data);
        res.end();
    });

}else if(req.url=='/Services'){
    fs.readFile(path.join(__dirname,"Service.html"),function(err,data){
        res.end(data);
    });
}else if(req.url=='/Portfolio'){
    fs.readFile(path.join(__dirname,"Portfolio.html"),function(err,data){
        res.end(data);
    });
}
else if(req.url=="/AboutUs"){
    fs.readFile(path.join(__dirname,"AboutUs.html"),function(err,data){
        res.end(data);
    });
}else if(req.url=="/Contact_Us"){
fs.readFile(path.join(__dirname,"Contact_Us.html"),function(err,data){

    res.end(data);
});

}else{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Not Found 404</h1>");
    res.end();
}
}).listen(3000);