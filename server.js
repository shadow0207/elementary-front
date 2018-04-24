const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
app.get("https://angular674.herokuapp.com/dashboard", function(req, res) {
    console.log("DASHBOARD")
});
app.get('*', function(req, res) {
    console.log("/dashboard")
  res.sendfile('./server/views/index.html')
})