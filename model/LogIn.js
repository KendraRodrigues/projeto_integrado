const Aluno = require('./Aluno');
module.exports = class LogIn {

    constructor() {
        this.aluno = new Aluno();
      }
 
      setMatAluno(a){
        this.aluno = a;
      }
      getMatAluno() {
        return this.aluno;
      }

      setSenAluno(a) {
        this.aluno = a;
      }
 
      getSenAluno() {
        return this.aluno;
      }

      autenticar() {
        
      }

}