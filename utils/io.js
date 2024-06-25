//통신 관련 함수들
const userController = require("../Controllers/user.controller");

module.exports = function (io) {
  //io관련된 모든 작업들
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);

    socket.on("login", async (userName, cb) => {
      //유저정보를 저장
      try {
        const user = await userController.saveUser(userName, socket.id);
        cb({ ok: true, data: user });
      } catch (error) {
        cb({ ok: false, error: error.message });
      }
    });

    socket.on("disconnect", () => {
      console.log("user is disconnected");
    });
  });
};
