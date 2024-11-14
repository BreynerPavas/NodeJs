let http = require("http");
let Logger = require("logplease");
const logger = Logger.create("utils");

http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Aprendiendo en The Bridge!");
  })
  .listen(8080);
  logger.log("Hola mundo de Node");
  logger.info("Noticias de ultima hora, Node.js me encanta!!");
  logger.warn("Tirando warnings como campeones");
  logger.error("Algo no esta bien!!")