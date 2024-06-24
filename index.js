const { createServer } = require("http");
const app = require("./app");
const { Server } = require("socket.io");
require("dotenv").config();

const httpServer = createServer(app);
//웹 소켓 서버 생성
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", //프론트엔드 주소
  },
});

require("./utils/io")(io);
httpServer.listen(process.env.PORT, () => {
  console.log("server listening on port", process.env.PORT);
});
