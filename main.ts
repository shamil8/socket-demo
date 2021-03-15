import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { SOCKET_PORT } from './constants'

const httpServer = createServer();
const io = new Server(httpServer, {
    // ...
});

io.on("connection", (socket: Socket) => {
    console.log('Socket Connected!!!')
});

httpServer.listen(SOCKET_PORT);