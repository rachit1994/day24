const Redis = require("redis");

const RedisClient = Redis.createClient();

RedisClient.on('error', (err) => console.log('Redis Client Error', err));


module.exports = RedisClient;