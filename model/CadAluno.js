const Aluno = require('./Aluno');
module.exports = class CadAluno {
    constructor(){
        this.novoAluno = new Aluno() 
    }
    getNovoAluno() {
        return this.novoAluno;
    }
}