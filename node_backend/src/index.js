const express = require('express'); //importa o express
const cors = require('cors');
const routes = require('./routes');

const app = express(); //armazena aplicação

app.use(cors());
app.use(express.json()); //um intermediário das rotas informando que o valor recebido é referente a um json
app.use(routes);
//criando a primeira rota
/**
 * Rota e recurso, recurso é o que vem depois da barra
 * 
 */

 /**
  * Metodos http
  * 
  * get: buscar um informação
  * post: criar uma informação
  * put: editar uma informação
  * delete: deletar um informação  
  */

  /**
   * TIPo de parametros
   * 
   * query: params: nomeados enviados na rota após o simbolo de ? usados para filtros e paginações ex:users?nome=valor
   * buscado dentro da rora por request.query;
   * route: params: usado para identificar recursos usados após os /: ex: user/:id
   * buscar dentro da rota por request.params;
   * body: passar vários parametros para modificação
   * buscar dentro da rota por request.body;
   */

   /**
    * SQL: MYSQL, POSTGRES, SQLITE, ORACLE
    * NOSQL: MONGODB, COUCHDB
    */

    /**
     * Driver: select * from users
     * query builder: table('users').select('')
     */


app.listen(3333); //porta de execução da aplicação 
