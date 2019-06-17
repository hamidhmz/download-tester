const express = require("express");
const path = require("path");
const streamDownloader = require("./lib/streamDownloadLimiter");
const app = express();




app.get("/",(req,res)=>{
    const now = Math.floor(Date.now()/1000)
    
    const filePath = path.join(__dirname, 'fs.apk');

    // streamDownloader.stream(filePath,res,now,500);
    streamDownloader.streamSleep(filePath,res,now,2);

    // res.download(filePath, (err) => {
    //     if (err) {
    //         console.log(err);
    //         return
    //     }
    //     console.log(Math.floor(Date.now()/1000) - now);
    // });
    

});

app.listen(80,()=>console.log("http://192.168.1.205/"));