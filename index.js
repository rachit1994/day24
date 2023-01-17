const express = require("express");
const logger = require("morgan");
const app = express();
const RedisClient = require("./config/connectRedis");
const scheduleRoutes = require("./routes/scheduleRoutes");
// require("./services/scheduler");
require("dotenv").config();

app.use(express.json());
app.use(logger("dev"));
app.use(express.static("client"));

app.use("/api/v1/schedule", scheduleRoutes);

app.listen(process.env.PORT, async () => {
  console.log("server is running ", process.env.PORT);
  RedisClient.connect()
  .then(() => {
    console.log("Connected to redis")
  })
  .catch((e) => {
    console.error(e);
  })
})