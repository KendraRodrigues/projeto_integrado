const Usuario = require('./Usuario');
const TCC = require('./TCC');

module.exports = class Aluno {

    constructor() {
        this.infoUsuario = new Usuario();
        this.matricula = "";
        this.anoIngresso = "";
        this.endereco = "";
        this.trabalho = new TCC();
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
          var sql = "INSERT INTO aluno (matricula, ano_ingresso, endereco) VALUES(?, ?, ?)";
      
          connection.query(sql, [this.matricula, this.anoIngresso, this.endereco], function (err, result) {
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