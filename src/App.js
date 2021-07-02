const express = require('express');

class App {
    iniciar(){
        // configurar express
        this.#configurarExpress();
        // carregar os controllers
        //iniciar servidor
    }
    #configurarExpress = () => {
        //cria a instAcia do express para gerenciar o servidor
        this.express = express();
        // registra os middlewares para fazer a conversão das requisições da API

        this.express.use(express.urlencoded({extended: true}));
        this.express.use(express.json);

        //registra o middleware para fazer log das requisições
        this.express.use((req, res,next)=> {
            console.log(`Requisição recebida, url=${req.url}, método http=${req.method}`);
        });

    }
}

module.exports =App;


//apresentação projeto beckNodeJs 1:17