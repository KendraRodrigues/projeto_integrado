const Usuario = require('./Usuario');
const TCC = require('./TCC');

module.exports = class Aluno {

    constructor() {
        this.nome = "";
        this.telefone = "";
        this.email = "";
        this.senha = "";
        this.curso = "";
        this.matricula = "";
        this.anoIngresso = "";
        this.endereco = "";
        this.trabalho = new TCC();
      }

      setNome(n) {
        this.nome = n;
      }

      getNome() {
        return this.nome;
      }

      setTelefone(t) {
        this.telefone = t;
      }

      getTelefone() {
        return this.telefone;
      }

      setEmail(e) {
        this.email = e;
      }

      getEmail() {
        return this.email;
      }
      
      setSenha(s) {
        this.senha = s;
      }

      getSenha() {
        return this.senha;
      }

      setCurso(c) {
        this.senha = s;
      }

      getCurso() {
        return this.curso;
      }

      setInfoUsuario(user) {
        this.infoUsuario = user;
      }

      getInfoUsuario() {
        return this.infoUsuario;
      }

      setMatricula(mat) {
        this.matricula = mat;
      }

      getMatricula() {
        return this.matricula;
      }

      setAnoIngresso(ai) {
        this.anoIngresso = ai;
      }
 
      getAnoIngresso() {
        return this.anoIngresso;
      }

      setEndereco(e) {
        this.endereco = e;
      }
 
      getEndereco() {
        return this.endereco;
      }

      cadTrabalho(trab) {
        this.trabalho = trab;
      }
 
      getTrabalho() {
        return this.trabalho;
      }

      inserir(connection) {
        try {
          var sql = "INSERT INTO aluno (nome, telefones, email, curso, matricula, ano_ingresso, endereco) VALUES(?, ?, ?,?, ?, ?, ?)";
      
          connection.query(sql, [this.nome, this.telefone, this.email, this.curso, this.matricula, this.anoIngresso, this.endereco], function (err, result) {
            if (err) throw "teste";
            //if (err) console.error('err from callback: ' + err.stack);
            });
        } catch (e) {
          console.error('err from callback: ' + e.stack);
          throw e;
        }
        }

        listar(connection, callback) {
          var sql = "SELECT * FROM alunos";
      
          connection.query(sql, function (err, result) {
          if (err) throw err;
          return callback(result);
          });    
        }
}