# Projeto Final Programação Web

Projeto final da matéria de Programação Web na UNIFEI

## Integrantes

Marcos Paulo Cyrillo da Silva - 2024015871 \
Rodrigo Silvestre Ribeiro de Oliveira - 2024001965

![image alt](https://github.com/mpcyrsci/projeto-programacao-web/blob/d9cbf25194569824235fe6f60c33cd846338953a/front-end/public/logo.png)

## Explicação do projeto

Nosso grupo desenvolveu uma aplicação web na qual é possível criar um perfil e adicionar os animes do qual você gostaria de dar uma nota após ter assistido,
cada lista de animes exibida é única para aquele usuário, é possível efetuar operações de cadastro de usuário, login, e logout, uma vez cadastrado, o usuário
conseguira adicionar, atualizar, remover, e listar os animes dos quais ele assistiu.

## Estrutura do projeto

Nosso código está estruturado em duas pastas principais, o front-end e o back-end, em cada uma dessas pastas, temos a pasta "src", na qual efetivamente temos o nosso código
fonte no qual prove o funcionamento da nossa aplicação, as estruturas dos dois é a seguinte:

```bash
FRONT END

src
├── components
    ├── anime (componentes reutilizáveis visuais relacionados ao display e a criação do anime)
    ├── layout (estilização a qual acompanha todas as páginas)
    ├── ui (Elementos gráficos de interação do usuário com a página)
├── pages (Páginas presentes dentro da aplicação)
├── services (Parte da aplicação responsável por mandar requisições HTTP para efetuar operações de autenticação e CRUD no banco de dados, além de API externa)
├── types (Covenções de dados que são usadas em várias partes do código)
index.css (Importação do tailwind e da fonte utilizada)
main.tsx (Raíz da aplicação)
router.tsx (Arquivo de roteamento de páginas, responsável pela troca de páginas quando necessário)
```

```bash
BACK END

src
├── controller (Parte responsável por tratar requisições HTTP e retornar uma resposta ao frontend/navegador tanto para CRUD quanto para autenticação)
├── middleware (Layer que intercepta requisições HTTP e checa por tokens para ver se o usuário tem autorização para acessar aquela rota privada)
├── prisma (Instanciação do ORM Prisma)
├── routes (Redirecionamento de rotas que identificam o verbo HTTP e o endpoint e redirecionam para o controlador adequado)
├── services (Parte do código que executa as operações no banco de dados e retorna dados do banco de dados, e as operações de autenticação de usuários)
├── tipos (Convenção de um formato de dado usado no código da aplicação)
app.ts (Página que instancia a aplicação express e porta de entrada das requisições HTTP oriundas do front end)
server.ts (Arquivo responsável por ligar o servidor)
```

## Como rodar o projeto

É necessário criar um arquivo .env na pasta back end

No .env do back end:
- DATABASE_URL= "file:./app.bd"
- JWT_SECRET="(código secreto da aplicação para geração do token)".

Após a criação dessas duas pastas, crie três terminais, dois na pasta do back end e um na pasta do front end

Primeiro terminal backend:
- npm i
- npx prisma studio
- npx prisma generate

Segundo terminal backend:
- npm run dev

Primerio terminal frontend:
- npm run dev

## Páginas da nossa aplicação:

<img width="1600" height="844" alt="homeWeb" src="https://github.com/user-attachments/assets/2ca78c5b-7f21-4ea7-bbf9-a9dfc9d25244" />
<img width="1600" height="850" alt="usuarioWeb" src="https://github.com/user-attachments/assets/e82c310a-9b13-47a4-898e-327ea5512033" />
<img width="1600" height="848" alt="cadastroWeb" src="https://github.com/user-attachments/assets/95a12d1d-00b7-42fb-9309-460674462c61" />
<img width="1600" height="846" alt="loginWeb" src="https://github.com/user-attachments/assets/a82b890f-16be-4d31-bdc6-6a700d74e991" />

## API externa utilizada:

A API externa que utilizamos se chama Jikan API, ela usa o banco de dados do site "MyAnimeList", um dos maiores repositórios de animes existentes na internet

O site da API Jikan é este [link](https://jikan.moe/)

Dentro do site, há a parte de documentação, na qual explica todas as requisições que podem ser feitas e os seus respectivos retornos

## Considerações finais:

Os integrantes do grupo aplicaram todo o conhecimento aprendido durante a matéria de Programação Web além de conhecimento externo para construir essa aplicação,
esta aplicação é o fruto da união de esforços e a prática da criatividade e do conhecimento para construir um projeto o qual satisfazesse os requisitos do projeto
final da matéria. 

Somos muito gratos pela experiência e por todo conhecimento adquirido.

