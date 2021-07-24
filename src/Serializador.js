const CustomError = require("./errors/CustomError");

class Serializador {
  json(dados) {
    return JSON.stringify(dados);
  }

  serializar(dados) {
    if (this.contentType === "application/json") {
      return this.json(dados);
    }

    throw new CustomError(
      `O tipo de conteúdo '${this.contentType}' não é suportado!`,
      406
    );
  }
}

module.exports = Serializador;
