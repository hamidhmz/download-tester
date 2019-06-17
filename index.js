const express = require("express");
const path = require("path");
const streamDownloader = require("./lib/streamDownloadLimiter");
const app = express();




app.get("/",(req,res)=>{
    console.log("newUser");
    const now = Math.floor(Date.now()/1000)
    
    const filePath =  '/home/debian/test/file/fs.apk';

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

app.listen(4040,()=>console.log("http://localhost/"));