const net = require("net");
const server = net.createServer();


server.on("connection",handleConnection);

server.listen(12345,"0.0.0.0",() => {
    const serverAddress = JSON.stringify(server.address());
    console.log(`Server listening on ${serverAddress}`);
});

function handleConnection(){
    console.log("new connection")
}