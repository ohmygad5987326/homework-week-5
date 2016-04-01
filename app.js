var express = require('express');
var app = express(),
path=require('path');

var port = process.env.PORT || 3000;
app.listen(port);


app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.render('index');
});
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
