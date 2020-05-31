


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

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao =  new app.persistencia.PagamentoDao(connection);

        pagamentoDao.salva(pagamento, function(erro, resultado){
            console.log('pagamento criado');
            res.json(pagamento);
        
        });

    });
}