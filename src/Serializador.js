const CustomError = require("./errors/CustomError");

class Serializador {
  json(dados) {
    return JSON.stringify(dados);
  }

  serializar(dados) {
    if (this.contentType === "application/json") {
      return this.filtrar(dados);
    }

    throw new CustomError(
      `O tipo de conteúdo '${this.contentType}' não é suportado!`,
      406
    );
  }

  filtrarObjeto(dados) {
    const novoObjeto = {};

    this.camposPublicos.forEach((campo) => {
      if (dados.hasOwnProperty(campo)) {
        novoObjeto[campo] = dados[campo];
      }
    });

    return novoObjeto;
  }

  filtrar(dados) {
    if (Array.isArray(dados)) {
      dados = dados.map((dado) => this.filtrarObjeto(dado));
    } else {
      dados = this.filtrarObjeto(dados);
    }
    return dados;
  }
}

class SerializadorFornecedor extends Serializador {
  constructor(contentType) {
    super();
    this.contentType = contentType;
    this.camposPublicos = ["id", "empresa", "categoria"];
  }
}

module.exports = {
  Serializador,
  SerializadorFornecedor,
  formatosAceitos: ["application/json"],
};
