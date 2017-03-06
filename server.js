var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});
app.post('/api/create', function (req, res) {
    console.log(req.body);
    //res.status(404) // HTTP status 404: NotFound
    //.send('Not found');
    res.send("OK");
});
app.listen(4555, function () {
    console.log("server is running on:4555");
});
