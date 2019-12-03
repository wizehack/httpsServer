const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');

// define model
var sdpModel = require('./model/sdp')

// configure ssl option
const options = {
    key: fs.readFileSync('certificate/wizehack.com.key'),
    cert: fs.readFileSync('certificate/wizehack.com.crt')
};

// Create a service (the app object is just a callback).
const app = express();
const ip = '127.0.0.1';
const port = process.env.PORT || 4430;

// configure router
var sdpApi = require('./router/sdp')(app, sdpModel);

// Create an HTTP service.
//http.createServer(app).listen(8080);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(4430, function () {
    console.log('Server Running at https://' + ip + ':' + port);
    console.log('------------ test apis -----------------------');
    console.log('GET https://' + ip + ':' + port + '/expiredAuth');
    console.log('POST https://' + ip + ':' + port + '/test/initservices');
});
