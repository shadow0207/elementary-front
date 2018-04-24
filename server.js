const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 8080);

app.get('/[^\.]+$', function (req, res) {
    res.set('Content-Tpe', 'text/html').res.sendfile(path.join(__dirname, '/public/index.html'))
});