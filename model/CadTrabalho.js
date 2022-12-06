const TCC = require('./TCC');

module.exports = class CadTrabalho {
    constructor() {
        this.cad = new TCC();
    }

    novoTCC() {
        this.cad();
     }
}

 