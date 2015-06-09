//npm install nodejs-websocket

var nodejsWebsocket = require("nodejs-websocket");
var server = nodejsWebsocket.createServer(function(connection){
    console.log("A new connection is established");
    var timerId = null;
    connection.on("text", function(msg){
        if (msg === "start"){
            timerId = setInterval(function(){
                connection.sendText(new Date().toString());
            },3000)
        } else if (msg === "stop"){
            clearInterval(timerId);
        }
    });
});
server.listen(9090);
console.log("Socket server is listening on port 9090");
