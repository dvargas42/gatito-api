const { Router } = require("express");
const TabelaFornecedor = require("./TabelaFornecedor");
const Fornecedor = require("./Fornecedor");
const CustomError = require("../../errors/CustomError");
const { SerializadorFornecedor } = require("../../Serializador");
const route = Router();

route.get("/", async (request, response) => {
  const resultados = await TabelaFornecedor.listar();

  const serializador = new SerializadorFornecedor(
    response.getHeader("Content-Type")
  );

  response.status(200);
  response.send(serializador.serializar(resultados));
});

route.post("/", async (request, response, next) => {
  try {
    const dadosRecebidos = request.body;
    const fornecedor = new Fornecedor(dadosRecebidos);

    await fornecedor.criar();

    const serializador = new SerializadorFornecedor(
      response.getHeader("Content-Type")
    );

    response.status(201);
    response.send(serializador.serializar(fornecedor));
  } catch (error) {
    next(error);
  }
});

route.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const fornecedor = new Fornecedor({ id });

    await fornecedor.carregar();

    const serializador = new SerializadorFornecedor(
      response.getHeader("Content-Type"),
      ["email", "dataCriacao", "dataAtualizacao", "versao"]
    );

    response.status(200);
    response.send(serializador.serializar(fornecedor));
  } catch (error) {
    next(error);
  }
});

route.put("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const { body } = request;
    const dados = Object.assign({}, body, { id: id });
    const fornecedor = new Fornecedor(dados);

    await fornecedor.atualizar();

    response.status(204);
    response.end();
  } catch (error) {
    next(error);
  }
});

route.delete("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const fornecedor = new Fornecedor({ id: id });

    await fornecedor.carregar();
    await fornecedor.remover();

    response.status(204);
    response.end();
  } catch (error) {
    next(error);
  }
});

module.exports = route;
