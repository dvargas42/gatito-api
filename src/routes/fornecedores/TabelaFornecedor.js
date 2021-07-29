const Modelo = require("./ModeloTabelaFornecedor");
const CustomError = require("../../errors/CustomError");

module.exports = {
  listar() {
    return Modelo.findAll({ raw: true });
  },

  inserir(fornecedor) {
    return Modelo.create(fornecedor);
  },

  async buscarPorId(id) {
    const encontrado = await Modelo.findOne({ where: { id: id } });

    if (!encontrado) {
      throw new CustomError("Fornecedor não encontrado!", 404);
    }

    return encontrado;
  },

  atualizar(id, dados) {
    return Modelo.update(dados, {
      where: { id: id },
    });
  },

  remover(id) {
    return Modelo.destroy({
      where: { id: id },
    });
  },
};
