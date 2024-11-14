// imports
let http = require("http");
let numeros = require("./numeros");
let Logger = require("logplease");
let logger = Logger.create("utils");
// despliegue
http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Aprendiendo en The Bridge!");
  })
  .listen(8080);
  // logs
  console.log(numeros.esPar(8)); // aqui hacemos la comprobacion de si es par
  let pruebaNumeros = [2,3,101,201,202,100];
  pruebaNumeros.forEach(i => {
    numeros.esPar(i)?logger.info(`${i} es par`):logger.error(`${i} no es par`);
  });

  