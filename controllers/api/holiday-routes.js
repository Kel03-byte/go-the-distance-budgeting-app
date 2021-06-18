const router = require("express").Router();
const session = require("express-session");
const sequelize = require("../../config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { Holiday, User } = require("../../models");

// Get all holidays
router.get("/", async (request, response) => {
  try {
    const holidayData = await Holiday.findAll({
      include: [{ model: User }],
      attributes: [
        "id",
        "username",
        "destination_location",
        "start_date",
        "end_date",
      ],
    });
    response.status(200).json(holidayData);
    console.log("holidayData", holidayData);
  } catch (error) {
    response.status(500).json(error.message);
  }
});

// Create a new holiday
router.post("/", async (request, response) => {
  try {
    const holidayData = await Holiday.create({
      user_id: request.body.user_id,
      destination_location: request.body.destination_location,
      start_date: request.body.start_date,
      end_date: request.body.end_date,
    });
    console.log("holiday data", holidayData);

    request.session.save(() => {
      request.session.loggedIn = true;
      response.status(200).json(holidayData);
    });
  } catch (error) {
    response.status(400).json(error.message);
  }
});

module.exports = router;
