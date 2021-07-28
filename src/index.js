const express = require("express");
const config = require("config");

const CustomError = require("./errors/CustomError");
const routeFornecedores = require("./routes/fornecedores");
const { formatosAceitos } = require("./Serializador");

const app = express();

app.use(express.json());

app.use((request, response, next) => {
  let formatoRequisitado = request.header("Accept");

  if (formatoRequisitado === "*/*") {
    formatoRequisitado = "application/json";
  }

  if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
    response.status(406);
    response.end();
    return;
  }
  response.setHeader("Content-Type", formatoRequisitado);
  next();
});

app.use("/api/fornecedores", routeFornecedores);

app.use((error, request, response, next) => {
  let status = 500;
  let message = "Internal server error!";

  if (error instanceof CustomError) {
    status = error.statusCode;
    message = error.message;
  }

  response.status(status);
  response.send(JSON.stringify({ message, status }));
});

app.listen(config.get("api.port"), () =>
  console.log(`A API está rodando na porta ${config.get("api.port")}!`)
);
