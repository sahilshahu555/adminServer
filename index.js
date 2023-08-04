const jasonServer=require("json-server");
const server=jasonServer.create();
const router=jasonServer.router("db.json");
const middele=jasonServer.defaults();

server.use(middele);
server.use(router);

server.listen(8080,()=>{console.log("8080")})

