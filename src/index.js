const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");

const route = require("./routes/fornecedores");

const app = express();

app.use(bodyParser.json());

app.use("/api/fornecedores", route);

app.listen(config.get("api.port"), () =>
  console.log(`A API está rodando na porta ${config.get("api.port")}!`)
);
