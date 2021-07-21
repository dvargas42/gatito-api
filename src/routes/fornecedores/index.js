const { Router } = require("express");
const TabelaFornecedor = require("./TabelaFornecedor");

const route = Router();

route.get("/", async (request, response) => {
  const resultados = await TabelaFornecedor.listar();

  response.send(JSON.stringify(resultados));
});

route.post("/", async (request, response) => {
  const dadosRecebidos = request.body;
  response.send("");
});

module.exports = route;
