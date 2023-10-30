const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);

const user = require("./routes/user.js");
const content = require("./routes/content.js");

app.use("/User", user);
app.use("/Content", content);

// 서버가 잘 동작하는지 확인
server.listen(9000, () => {
  console.log("server is running on 9000");
});
