function doWork(onComplete, onProgress){
    for(var i=0; i<(10000);i++)
        for(var j=0; j<10000; j++)
            for(var k=0; k<100; k++)
            {}
}
//doWork();
self.addEventListener("message", function(evtArg){
    console.log("Message from main - ", evtArg.data);
    self.postMessage("Thanks for the message");
})
