# teste-auth-js
PROJETO DE TESTE PARA VAGA TRAINEE

teste-auth-js

Este é um projeto simples de autenticação utilizando Node.js, Express e PostgreSQL
O objetivo é demonstrar conceitos básicos de backend, comunicação com banco de dados e autenticação.


🛠️ Tecnologias Utilizadas

Backend

Node.js

Express

PostgreSQL (pg)

Nodemon (opcional)

Frontend

HTML

CSS

JavaScript

1. Instalar dependências

npm install express
npm install pg - (banco de dados)
npm install jsonwebtoken - (token jwt)
npm install bcrypt - (criptografia e descriptografia de senha)

🗄️ Configuração do Banco de Dados (PostgreSQL)

O projeto utiliza um banco de dados local.
A configuração está no arquivo:
backend/model/model.js

Configuração atual:

const pool = new pg.Pool({
    user: "postgres",
    password: "mrc#5467@",
    host: "localhost",
    database: "db_user_js",
    port: 5432
});

⚠️ Atenção

É necessário ter PostgreSQL instalado.

Você pode usar essas mesmas credenciais, pois o banco é local e não contém dados sensíveis.

Se quiser usar suas próprias credenciais, basta editar o arquivo model.js.

Servidor sobe em:
http://localhost:3000
