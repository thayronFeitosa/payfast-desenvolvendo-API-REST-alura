


module.exports = function(app){

        app.get('/pagamentos', function(req, res){
        console.log('Recebida requisição de teste.')    
        res.send('ok.');
    });



    app.post('/pagamentos/pagamento',function(req, res){

        req.assert("forma_de_pagamento","Forma de pagamento e obrigatorio").notEmpty();
        req.assert("valor","Valor é obrigatorio e deve ser decimal").notEmpty().isFloat();
        
        var erros =req.validationErrors(); 
        if(erros){
            console.log("Erros de validação encontrados"+erros);
            res.status(400).send(erros);
            return;
        }


        var pagamento = req.body;
        console.log('processando uma requisição de um novo pagamento!');
        pagamento.status = 'CRIADO';
        pagamento.data = new Date;

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao =  new app.persistencia.PagamentoDao(connection);

        pagamentoDao.salva(pagamento, function(erro, resultado){
            if(erro){
                console.log('Erro ao gravar no banco de dados: '+ erro);
                res.status(500).send(erro);
            }else{
                console.log('pagamento criado');
                res.status(201).json(pagamento);
            }
        });

    });
}