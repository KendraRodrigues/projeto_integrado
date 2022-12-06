const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));

app.listen(3000, function(){
  console.log("Servidor no ar - Porta: 3000!")
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const Aluno = require('./model/Aluno');
const LogIn = require('./model/LogIn');

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "200.17.84.52",
  user: "gleison",
  password: "12345678",
  database: "sistema_tcc"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Banco de dados conectado!");
});


app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

// Cadastro Aluno

app.post('/cadastrarAluno', function(req, res) {

      var cad = new Aluno();
      
      cad.getInfoUsuario().setNome(req.body.nome);
      cad.getInfoUsuario().setTelefone(req.body.telefone);
      cad.getInfoUsuario().setEmail(req.body.email);
      cad.getInfoUsuario().setSenha(req.body.senha);
      cad.setMatricula(req.body.matricula);
      cad.setAnoIngresso(req.body.anoIngresso);
      cad.setEndereco(req.body.endereco);
      
    res.sendFile(__dirname + '/views/logInAluno/formularioLogin.html');
});

app.post('/entradaAluno', function(req, res){
	var log = new LogIn();
  
    log.getMatAluno().setMatricula(req.body.matricula);
    log.getSenAluno().setSenha(req.body.senha);
    
    res.sendFile(__dirname + '/views/cadAluno/inicioAluno.html');
});