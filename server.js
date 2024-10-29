const net=require('net');
const logger=require('./logger')("server");

//created a simple tcp server
const server=net.createServer();
const port=6379;
const host="127.0.0.1";

server.on("connection",(socket)=>{
    socket.on("data",(data)=>{
        const reqData=data.toString();

        socket.write("res: "+reqData)
    })

    socket.on("end",()=>{
        console.log("Client disconnection");
    })
})


server.listen(port,host,()=>{
    logger.log(`Server listening on ${host}:${port}`)
})