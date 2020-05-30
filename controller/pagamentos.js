


module.exports = function(app){

    app.get('/pagamentos', function(req, res){
    console.log('Recebida requisição de teste.')    
    res.send('ok.');
});



app.post('/pagamentos/pagamento',function(req, res){
    var pagamento = req.body;
    console.log('processando uma requisição de um novo pagamento!');
    pagamento.status = 'CRIADO';
    pagamento.data = new Date;
    
    
    res.send(pagamento);
    
});
}