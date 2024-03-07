const net = require("net");
const server = net.createServer();


server.on("connection",handleConnection);

server.listen(12345,"0.0.0.0",() => {
    const serverAddress = JSON.stringify(server.address());
    console.log(`Server listening on ${serverAddress}`);
});

function handleConnection(){
    const remoteAddress = `${socket.remoteAddress}:${socket.remoteAddress}`;
    console.log(`new connection from ${remoteAddress}`);
    socket.on("data",onConnData);
    socket.on("close",onConnClose);
    socket.om("error",onConnError);
}

function onConnData (data){
    console.log (`${remoteAddress } sent : ${data}`);
}

function onConnClose(){}
function onConnError(){}