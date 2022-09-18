/*
 *https://www.youtube.com/watch?v=VM4e37DaskU&t=1395s
 */
const express = require("express");
const app = express();
const port = 9000;

app.get("/", (request, response) => {
  response.header("Access-Control-Allow-Origin", "*");
  const produto = [
    {
      nome: "Arroz Panela à Lenha",
      tipo: 1,
      embalagem: "kg",
      ean: "7896534276252"
    },
    {
      nome: "Macarão Forte do Galo",
      tipo: "Espaguete",
      embalagem: "gm",
      ean: "7896595278742"
    },
    {
      nome: "Fermento em pó Selene",
      tipo: "Fino",
      embalagem: "gm",
      ean: "7896587177132"
    },
    {
      nome: "Frango Cong. in Natura Bravo",
      tipo: "Caipira",
      embalagem: "kg",
      ean: "7898354276245"
    },
    {
      nome: "Lasanha Polonesa",
      tipo: "Congelada",
      embalagem: "kg",
      ean: "7896583743628"
    }
  ];
  return response.json({ data: produto });
});

app.listen(port, function () {
  console.log(`Express server running at http://127.0.0.1:${port}`);
});
