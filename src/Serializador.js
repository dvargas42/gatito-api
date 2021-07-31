const jsontoxml = require("jsontoxml");
const CustomError = require("./errors/CustomError");

class Serializador {
  json(dados) {
    return JSON.stringify(dados);
  }

  xml(dados) {
    let tag = this.tagSingle;

    if (Array.isArray(dados)) {
      tag = this.tagPlural;

      dados = dados.map((item) => {
        return { [this.tagSingle]: { item } };
      });
    }

    return jsontoxml({ [tag]: dados });
  }

  serializar(dados) {
    dados = this.filtrar(dados);

    if (this.contentType === "application/json") {
      return this.json(dados);
    }

    if (this.contentType === "application/xml") {
      return this.xml(dados);
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
  constructor(contentType, camposExtras = []) {
    super();
    this.contentType = contentType;
    this.camposPublicos = ["id", "empresa", "categoria"].concat(camposExtras);
    this.tagSingle = "fornecedor";
    this.tagPlural = "fornecedores";
  }
}

class SerializadorErro extends Serializador {
  constructor(contentType, camposExtras) {
    super();
    this.contentType = contentType;
    this.camposPublicos = ["id", "message"].concat(camposExtras || []);
    this.tagSingle = "erro";
    this.tagPlural = "erros";
  }
}

module.exports = {
  Serializador,
  SerializadorFornecedor,
  SerializadorErro,
  formatosAceitos: ["application/json", "application/xml"],
};
