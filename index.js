const express = require("express");
const path = require("path");
const streamDownloader = require("./lib/streamDownloadLimiter");
const app = express();




app.get("/:fileName/:time/:function",(req,res)=>{
    console.log("newUser");
    const now = Math.floor(Date.now()/1000);
    console.log(req.params.fileName);
    const filePath =  '/home/debian/test/file/'+ req.params.fileName;

    switch(req.params.function)
    {
        case "stream":
            streamDownloader.stream(filePath,res,now,req.params.time);//time In bytes per second
            break;
    
        case "streamSleep":
            streamDownloader.streamSleep(filePath,res,now,req.params.time);//time is sleep time
            break;
    
        default:
            res.download(filePath, (err) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log(Math.floor(Date.now()/1000) - now);
            });
    }
});

app.listen(4040,()=>console.log("http://localhost:4040/"));