const Redis = require("redis");
require("dotenv").config();

const RedisClient = Redis.createClient({
  url: process.env.REDIS_URL
});

RedisClient.on('error', (err) => console.log('Redis Client Error', err));


module.exports = RedisClient;