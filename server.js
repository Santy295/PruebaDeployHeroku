const express = require('express');
// const path = require('path');
const app = express();
app.use(express.static('./dist/tp1'));
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/tp1' }
    );
  });
// app.get('/*', function(req,res) {
// res.sendFile(path.join(__dirname+
// '/dist/index.html'));});
app.listen(process.env.PORT || 8080);
