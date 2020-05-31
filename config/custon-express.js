var express = require('express');
var consing = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){
   var app = express();

   //app.use(bodyParser.urlencoded({extended: true}));
   app.use(bodyParser.json());

   consing()
    .include('controller')
    .then('persinstencia')
    .into(app);
   return app;
}