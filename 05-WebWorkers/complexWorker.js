function doWork(onComplete, onProgress){
    for(var x = 0; x < 100; x++){
        for(var i=0; i<(10000/100);i++)
            for(var j=0; j<10000; j++)
                for(var k=0; k<100; k++)
                {}

        self.postMessage({
            type:"progress",
            percentCompleted : x + 1
        });
    }
}
//doWork();
self.addEventListener("message", function(evtArg){
   if (evtArg.data.type === "start"){
       doWork();
       self.postMessage({
           type : "completion"
       });
   }
})
