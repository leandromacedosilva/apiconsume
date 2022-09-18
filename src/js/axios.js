// Requisição GET para imagem remota em node.js
axios({
  method: "get",
  url: "http://127.0.0.1:9000/hello",
  responseType: "stream"
}).then(function (response) {
  response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
});
