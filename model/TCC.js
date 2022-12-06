module.exports = class TCC {

    constructor() {
        this.autor = "";
        this.titulo = "";
        this.resumo = "";
        this.palavrasChave = [];
        this.linkDocumento = "";
        this.estado = 0;
      }

      setAutor(aut) {
        this.autor = aut;
      }

      getAutor() {
        return this.autor;
      }

      setTitulo(tit) {
        this.titulo = tit;
      }

      getTitulo() {
        return this.titulo;
      }

      setResumo(res) {
        this.resumo = res;
      }

      getResumo() {
        return this.resumo;
      }
      
      setPalavrasChave(pc) {
        this.palavrasChave = pc;
      }

      getPalavrasChave() {
        return this.palavrasChave;
      }

      setLinkDocumento(ld) {
        this.linkDocumento = ld;
      }
 
      getLinkDocumento() {
        return this.linkDocumento;
      }

      setEstado(est) {
        this.estado = est;
      }
 
      getEstado() {
        return this.estado;
      }

      inserir(connection) {
        try {
          var sql = "INSERT INTO TCC (titulo, resumo,palavras_chave, link_documento) VALUES(?, ?, ?, ?)";
      
          connection.query(sql, [this.titulo, this.resumo, this.palavrasChave, this.linkDocumento], function (err, result) {
            if (err) throw "teste";
            //if (err) console.error('err from callback: ' + err.stack);
            });
        } catch (e) {
          console.error('err from callback: ' + e.stack);
          throw e;
        }
        }
}