module.exports = class Usuario {

    constructor() {
        this.nome = "";
        this.telefone = "";
        this.email = "";
        this.senha = "";
        this.curso = "";
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

      inserir(connection) {
        try {
          var sql = "INSERT INTO aluno (nome, telefones, email, curso) VALUES(?, ?, ?, ?)";
      
          connection.query(sql, [this.nome, this.telefone, this.email, this.curso], function (err, result) {
            if (err) throw "teste";
            //if (err) console.error('err from callback: ' + err.stack);
            });
        } catch (e) {
          console.error('err from callback: ' + e.stack);
          throw e;
        }
        }
}

