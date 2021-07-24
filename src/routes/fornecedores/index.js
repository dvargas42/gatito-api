const { Router } = require("express");
const TabelaFornecedor = require("./TabelaFornecedor");
const Fornecedor = require("./Fornecedor");
const CustomError = require("../../errors/CustomError");

const route = Router();

route.get("/", async (request, response) => {
  const resultados = await TabelaFornecedor.listar();

  response.send(JSON.stringify(resultados));
});

route.post("/", async (request, response, next) => {
  try {
    const dadosRecebidos = request.body;
    const fornecedor = new Fornecedor(dadosRecebidos);

    await fornecedor.criar();

    response.status(201);
    response.send(JSON.stringify(fornecedor));
  } catch (error) {
    next(error);
  }
});

route.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const fornecedor = new Fornecedor({ id });

    await fornecedor.carregar();

    response.send(JSON.stringify(fornecedor));
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
