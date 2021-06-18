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
      attributes: ["id", "username", "destination_location", "start_date", "end_date"],
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
<<<<<<< HEAD
    const holidayData = await Holiday.create({
=======
    const holidayData = await Holiday.create( request.body, {
>>>>>>> 2dd08ff3004006acef22043e1efd7ef95546eb4f
      user_id: request.body.user_id,
      destination_location: request.body.destination_location,
      start_date: request.body.start_date,
      end_date: request.body.end_date,
<<<<<<< HEAD
      // total_budget: request.body.total_budget,
    });
    console.log("holiday data", holidayData);

    request.session.save(() => {
      request.body.user_id = holidayData.id;
      request.session.loggedIn = true;
      response.status(200).json(holidayData);
=======
>>>>>>> 2dd08ff3004006acef22043e1efd7ef95546eb4f
    });
    console.log("user_id", user_id);
  } catch (error) {
    response.status(400).json(error.message);
  }
});

module.exports = router;
