var express = require('express');
var consing = require('consign');

module.exports = function(){
   var app = express();
   consing()
    .include('controller')
    .into(app);

   return app;
}