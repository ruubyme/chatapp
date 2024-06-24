//통신 관련 함수들

module.exports = function (io) {
  //io관련된 모든 작업들
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);

    socket.on("login", async (userName, cb) => {
      //유저정보를 저장
    });

    socket.on("disconnect", () => {
      console.log("user is disconnected");
    });
  });
};
