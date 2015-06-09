var fs = require("fs"),
    http = require("http"),
    path = require("path");

var server = http.createServer(function(req,res){
    if (req.url === "/")
        req.url = "index.html";
    if (req.url === "/events"){
        res.writeHead(200, {"Content-Type":"text/event-stream", "Cache-Control":"no-cache", "Connection":"keep-alive"});
        setInterval(function(){
            res.write("event: timeStamp\n");
            res.write("data: " + new Date().toString() + "\n\n");
        },5000);
    } else {
        var fileName = path.join(__dirname, req.url);
        if (fs.existsSync(fileName)){
            fs.createReadStream(fileName, {encoding : "utf8"}).pipe(res);
        } else  {
            res.statusCode = 404;
            res.end();
        }
    }
});
server.listen(8080);
console.log("server listening on port 8080");
