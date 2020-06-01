<h1>payfast-desenvolvendo-API-REST-alura</h1>

<p>
  Esse estudo tem como base aprender a faser uma api seguindo os padroes REST.<br>
</p>

<p>
  API foi criada toda em javascript com nodeJS, pois era mais facíl de implementar devido ja ter uma conhecimento em javascript <br><br>
  <strong>As dependências que foram utilizadas no projeto foram:</strong><br>
  <ul>
    <li>npm install express --save <a href="https://expressjs.com/pt-br/guide/routing.html" target="_blank" >(Documentação)</a></li>
    <li>npm install nodemon --save <a href="https://www.npmjs.com/package/nodemon" target="_blank">(Documentação)</a></li>
    <li>npm install --save body-parser <a href="https://www.npmjs.com/package/body-parser" target="_blank">(Documentação)</a></li> 
    <li>npm install --save consign <a href="https://www.npmjs.com/package/consign" target="_blank">(Documentação)</a></li>
    <li>npm install --save mysql <a href="https://www.npmjs.com/package/mysql">(Documentação)</a></li>
    <li>npm install --sava express-validator <strong>ou</strong> (npm i express-validator@2.20.8) <a href="https://express-validator.github.io/docs/"target="_blank">(Documentação)</a></li>
  </ul>

  <br>
  <strong>Comando usando para fazer o POST na url e salvar o arquivo json no banco de dados</strong><br>
  curl http://localhost:3000/pagamentos/pagamento -X POST -v -H "Content-type: application/json" -d @files/pagamento.json | json_pp<br>

</p>
<p>
  <strong>Códigos de status de respostas HTTP</strong><br>
  Os códigos de status das respostas HTTP indicam se uma requisição (HTTP) foi corretamente concluída. E de extrema importância conhecer bem os protocolos http para não retornar um status errado na hora de fazer o algorítimo. As respostas são agrupadas em cinco classes:<br><br>
  1. Respostas de informação (100-199),<br>
  2. Respostas de sucesso (200-299),<br>
  3. Redirecionamentos (300-399)<br>
  4. Erros do cliente (400-499)<br>
  5. Erros do servidor (500-599).<br>
  Caso ainda tenha alguma dúvida sobre os protocolos você poder ler mais sobre em <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status">Documentação</a>
</p>
<p><strong>Banco e dados</strong><br>
 Na instalação do Mysql usando o comando <strong>sudo apt-get install mysql-server</strong> foi definido uma senha, e para poder logar no Mysql usando o prompt e necessário usar o comando <strong>mysql -u root -p</strong> apos usar o comando e só digitar a senha que irá abrir o terminal do Mysql
  <br><br>
  <strong>Tabela do banco de dados</strong><br><br>
    CREATE TABLE `pagamentos` (<br>
      `id` int(11) NOT NULL AUTO_INCREMENT,<br>
      `forma_de_pagamento` varchar(255) NOT NULL,<br>
      `valor` decimal(10,2) NOT NULL,<br>
      `moeda` varchar(3) NOT NULL,<br>
      `status` varchar(255) NOT NULL,<br>
      `data` DATE,<br>
      `descricao` text,<br>
      PRIMARY KEY (id)<br>
    );<br>
</p>
