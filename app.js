const express = require('express');
const session = require('express-session');

const app = express();
const port = 8000;

// Configuração do MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'phpmyadmin',
    password: 'stefany123',
    database: 'usuarios',
});

// Configuração do middleware de sessão
app.use(session({
    secret: 'sua_chave_secreta',
    resave: true,
    saveUninitialized: true
}));

// Configurar EJS como o motor de visualização
app.set('view engine', 'ejs');


// Definições de rotas
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

app.get('/postagens', (req, res) => {
    res.render('postagens');
});

// Rota de login
app.post('/login', (req, res) => {
    // Lógica de autenticação aqui
    // Verificar credenciais do administrador
    // Se as credenciais estiverem corretas, defina req.session.isAdmin como verdadeiro
});

// Rota para exibir todas as postagens
app.get('/postagens', (req, res) => {
    if (req.session.isAdmin) {
        // Lógica para exibir todas as postagens
    } else {
        res.redirect('/login');
    }
});

// Rota para editar uma postagem específica
app.get('/postagens/editar/:id', (req, res) => {
    if (req.session.isAdmin) {
        const postId = req.params.id;
        // Lógica para editar a postagem com o ID fornecido
    } else {
        res.redirect('/login');
    }
});

// Rota de painel de administração
app.get('/painel', (req, res) => {
    if (req.session.isAdmin) {
        // Lógica para renderizar o painel de administração
    } else {
        res.redirect('/login');
    }
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


