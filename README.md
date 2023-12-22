# Rotas Protegidas

## Descrição
O projeto "Rotas Protegidas" é uma aplicação Node.js que demonstra a implementação prática de conceitos importantes, tais como autenticação com JWT, conexão com um banco de dados relacional (PostgreSQL) e consultas utilizando SQL embutido no código, além da encriptação de dados sensíveis, como senhas, no banco de dados utilizando a biblioteca bcrypt.

## Objetivo
O objetivo deste projeto é fornecer um exemplo claro e conciso de como criar uma aplicação Node.js segura e eficiente, utilizando boas práticas para a manipulação de dados sensíveis, como senhas, e estabelecendo um sistema de autenticação robusto com JSON Web Tokens (JWT). Além disso, a aplicação mostra como se conectar a um banco de dados relacional, realizar consultas utilizando SQL e manter um código organizado e abstrato.

## Funcionalidades Destacadas
- **Autenticação com JWT:** Implementação de um sistema de autenticação seguro e escalável utilizando JSON Web Tokens para proteger rotas específicas.
- **Conexão com Banco de Dados Relacional:** Demonstração de como estabelecer conexão com um banco de dados PostgreSQL utilizando a biblioteca `knex` para facilitar as operações com o banco.
- **Consulta SQL Embutido no Código:** Exemplo prático de como realizar consultas SQL diretamente no código, mantendo a flexibilidade e a clareza na manipulação de dados.
- **Encriptação de Senhas com Bcrypt:** Utilização da biblioteca `bcrypt` para encriptar dados sensíveis, como senhas, antes de armazená-los no banco de dados, garantindo segurança adicional.

## Dependências do Projeto
- **bcrypt:** Biblioteca para a encriptação segura de dados sensíveis.
- **dotenv:** Utilizado para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **express:** Framework web utilizado para facilitar a construção de APIs.
- **jsonwebtoken:** Implementação de JSON Web Tokens para autenticação.
- **knex:** SQL query builder para Node.js, facilitando a interação com o banco de dados.
- **pg:** Driver PostgreSQL para Node.js, utilizado para a comunicação com o banco de dados.

## Instalação
1. Clone o repositório: `git clone https://github.com/seu-usuario/rotas-protegidas.git`
2. Instale as dependências: `npm install`
3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias, como o segredo para JWT e as credenciais do banco de dados.
4. Execute a aplicação: `npm start`

Certifique-se de ter um servidor PostgreSQL em execução e as credenciais de acesso configuradas corretamente no arquivo `.env`.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto.

## Licença
Este projeto é licenciado sob a [Licença MIT](LICENSE).
