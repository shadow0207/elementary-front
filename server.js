const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);

app.use('/api', routesApi);
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});