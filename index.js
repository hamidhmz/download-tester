const express = require("express");
const streamDownloader = require("./lib/streamDownloadLimiter");
const app = express();




app.get("/dl/:fileName/:function", (req, res) => {
    console.log(req.params.fileName);
    const filePath = '/home/debian/test/file/' + req.params.fileName;

    switch (req.params.function) {
        case "1":
            streamDownloader.stream(filePath, res,1024);//time In bytes per second in kb
            break;

        case "2":
            streamDownloader.streamSleep(filePath, res, 500);//time to milliseconds is sleep time
            break;
        case "3":
            res.download(filePath); 
        default:
            return 0;
    }
});

app.listen(4040,()=>console.log("http://localhost:4040/"));