const ThrottledReader = require('throttled-reader');
const fs = require('fs');
const sleep = require("thread-sleep");
let mime = require('mime-types');

module.exports.stream = function(filePath,res,now,timeKB){
    const stat = fs.statSync(filePath);
    const contentType = mime.lookup(filePath); 
    res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': stat.size,
        // 'Content-Disposition': 'attachment; filename=fs.apk'
    });
    const readStream = fs.createReadStream(filePath);
    const throttledStream = new ThrottledReader(readStream, {
        rate: timeKB * 1024 // In bytes per second
    });
    const stream = throttledStream.pipe(res);
    stream.on('finish', function () { console.log(Math.floor(Date.now()/1000) - now); });
    // const stream = readStream.pipe(res);
}

module.exports.streamSleep = function(filePath,res,now,stopTime){
    const stat = fs.statSync(filePath);
    const contentType = mime.lookup(filePath);
    let data = '';
    res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': stat.size,
        // 'Content-Disposition': 'attachment; filename=fs.apk'
    });
    const readStream = fs.createReadStream(filePath);
    readStream.on('data', function(chunk) {
        sleep(stopTime);
     });
    const stream = readStream.pipe(res);
    stream.on('finish', function () { console.log(Math.floor(Date.now()/1000) - now); });
    ;
}