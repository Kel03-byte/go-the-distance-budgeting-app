const router = require("express").Router();
const session = require("express-session");
const sequelize = require("../../config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const Holiday = require("../../models/Holiday");

// Get all holidays
router.get("/", async (request, response) => {
  try {
    const holidayData = await Holiday.findAll({
      attributes: ["id", "destination_location", "start_date", "end_date"],
    });
    response.status(200).json(holidayData);
    console.log("holidayData", holidayData);
  } catch (error) {
    response.status(500).json(error);
  }
});

// Create a new holiday
router.post("/", async (request, response) => {
  try {
    const holidayData = await Holiday.create({
      destination_location: request.body.destination_location,
      start_date: request.body.start_date,
      end_date: request.body.end_date,
      
    });
    console.log("holiday data", holidayData);

    request.session.save(() => {
      request.body.user_id = holidayData.id;
      request.session.loggedIn = true;
      response.status(200).json(holidayData);
    });
  } catch (error) {
    response.status(400).json(error.message);
  }
});

module.exports = router;
