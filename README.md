<h1>payfast-desenvolvendo-API-REST-alura</h1>

<p>
  Esse estudo tem como base aprender a faser uma api seguindo os padroes REST.<br>
</p>

<p>
  API foi criada toda em javascript com nodeJS, pois era mais facíl de implementar devido ja ter uma conhecimento em javascript <br><br>
  <strong>As dependências que foram utilizadas no projeto foram:</strong><br>
  <ul>
    <li>npm install express --save <a href="https://expressjs.com/pt-br/guide/routing.html">(Documentação)</a></li>
    <li>npm install nodemon --save <a href="https://www.npmjs.com/package/nodemon">(Documentação)</a></li>
    <li>npm install --save body-parser <a href="https://www.npmjs.com/package/body-parser">(Documentação)</a></li> 
    <li>npm install --save consign <a href="https://www.npmjs.com/package/consign">(Documentação)</a></li>
    <li>npm install --save mysql <a href="https://www.npmjs.com/package/mysql">(Documentação)</a></li>
  </ul>
</p>
<p> Na instalação do Mysql usando o comando <strong>sudo apt-get install mysql-server</strong> foi definido uma senha, e para poder logar no Mysql usando o prompt e necessário usar o comando <strong>mysql -u root -p</strong> apos usar o comando e só digitar a senha que irá abrir o terminal do Mysql
<br><br>
<strong>Tabela do banco de dados</strong>
  CREATE TABLE `pagamentos` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
       `forma_de_pagamento` varchar(255) NOT NULL,
       `valor` decimal(10,2) NOT NULL,
       `moeda` varchar(3) NOT NULL,
       `status` varchar(255) NOT NULL,
       `data` DATE,
       `descricao` text,
        PRIMARY KEY (id)
       );
</p>
