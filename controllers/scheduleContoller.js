const RedisClient = require("../config/connectRedis");

const createSchedule = async (req, res) => {
  try {
    //  "schedule" : [ "gym", "", "college" ]
    const { schedule } = req.body;
    await RedisClient.set("schedule", JSON.stringify(schedule));
    const savedSchedule = await RedisClient.get("schedule");

    res.status(200).json({ message: savedSchedule })
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e });
  }
};

module.exports = { createSchedule };