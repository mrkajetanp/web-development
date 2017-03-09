"use strict";
var http = require("http");
var fs = require("fs");
function serveStaticFile(res, path, contentType, responseCode) {
    if (responseCode === void 0) { responseCode = 200; }
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("500 - Internal Error");
        }
        else {
            res.writeHead(responseCode, { "Content-Type": contentType });
            res.end(data);
        }
    });
}
http.createServer(function (req, res) {
    // normalize the url (remove querystring, optional slash, make it lowercase)
    var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch (path) {
        case "":
            serveStaticFile(res, "/public/home.html", "text/html");
            break;
        case "/about":
            serveStaticFile(res, "/public/about.html", "text/html");
            break;
        case "/img/logo.jpg":
            serveStaticFile(res, "/public/img/nodelogo.jpg", "image/jpeg");
            break;
        default:
            serveStaticFile(res, "/public/404.html", "text/html", 404);
            break;
    }
}).listen(8088);
console.log("Server started at 127.0.0.1:8088..");
//
