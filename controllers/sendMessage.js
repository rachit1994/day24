const RedisClient = require("../config/connectRedis");

const sendMessage = async () => {
  try {
     let date = new Date();
     let minutes = date.getMinutes();
     let hour = date.getHours();
     const schedule = await RedisClient.get("schedule");
     const parsedSchedule = JSON.parse(schedule) || [];
     const index = hour - 9;
     console.log("DEBUG: ", parsedSchedule, index);

     if(minutes === 30) {
      // send a quote
      console.log("Keep hustling !");
     } else {
      if(index - 1 >= 0) {
        console.log(`It's time to start ${parsedSchedule[index]} task, was ${parsedSchedule[index - 1]} task complete?`)
      } else if (index === 0) {
        console.log("Start your day with " + parsedSchedule[index]);
      }
     }
  } catch(e) {
    console.error(e);
  }
}

module.exports = { sendMessage };