const Router = require("express").Router()
const { createSchedule } = require("../controllers/scheduleContoller");

Router.route("/").post(createSchedule)

module.exports = Router;