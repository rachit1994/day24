const scheduler = require("node-cron");
const { sendMessage } = require("../controllers/sendMessage");

const job = scheduler.schedule("* * * * * *", sendMessage, {
  scheduled: false,
  timezone: "Asia/Kolkata"
});

scheduler.schedule("* * * * *", () => {
  job.start();
});

scheduler.schedule("20 20 * * *", () => {
  job.stop();
});
