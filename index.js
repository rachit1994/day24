const express = require("express");
const logger = require("morgan");
const app = express();
const RedisClient = require("./config/connectRedis");
const scheduleRoutes = require("./routes/scheduleRoutes");
require("./services/scheduler");

const PORT = 1338;

app.use(express.json());
app.use(logger("dev"));
app.use(express.static("client"));

app.use("/api/v1/schedule", scheduleRoutes);

app.listen(PORT, async () => {
  console.log("server is running");
  RedisClient.connect()
  .then(() => {
    console.log("Connected to redis")
  })
  .catch((e) => {
    console.error(e);
  })
})