// const API =  GET /users/:username/followers

var http = require("http");
var https = require("https");

/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */

 var options = {
     host: 'api.github.com',
     port: 443,
     path: '/users/shlomialon/followers',
     method: 'GET',
     headers: {
         'Content-Type': 'application/json',
         'User-Agent': 'jerf'
     }
 };

 function onResult(status, data) {
   var objs = JSON.parse(data);
   var count = 0;
    for(var i in objs) {
        console.log(objs[i].login);
        count++;
    }
 }

var getData = function(options, onResult)
{
    console.log("rest::getJSON");

    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function(res)
    {
        var output = '';
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            onResult(res.statusCode, output);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};

getData(options,onResult);
