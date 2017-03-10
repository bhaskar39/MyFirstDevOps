var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Bhaskar...Welcome to first Jenkins build..");
});

app.listen(4000);
