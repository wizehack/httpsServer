const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');

const options = {
    key: fs.readFileSync('certificate/wizehack.com.key'),
    cert: fs.readFileSync('certificate/wizehack.com.crt')
};

// Create a service (the app object is just a callback).
const app = express();
//
// // Create an HTTP service.
http.createServer(app).listen(8080);
// // Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(4430);
