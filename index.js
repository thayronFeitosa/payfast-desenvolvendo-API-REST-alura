var app = require('./config/custon-express')();
var porta = 3000;
app.listen(porta, function(){
console.log(`servidor rodando na porta ${porta}`);
});
