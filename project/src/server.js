const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);

const user = require("./routes/user.js");
const content = require("./routes/content.js");
const hotel = require("./routes/hotel.js");
const airline = require("./routes/airline.js");

app.use("/User", user);
app.use("/Content", content);
app.use("/Hotel", hotel);
app.use("/Airline", airline);

// 서버가 잘 동작하는지 확인
server.listen(9000, () => {
  console.log("server is running on 9000");
});
