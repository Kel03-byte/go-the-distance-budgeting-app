// Holiday Route to find and create a Holiday

const router = require("express").Router();
const { Holiday } = require("../../models");
const withAuth = require("../../utils/auth")

// Get all Holidays
router.get("/", async (request, response) => {
  try {
    const holidayData = await Holiday.findAll({
    });
    response.status(200).json(holidayData);
  } catch (error) {
    console.log(error.message);
    response.status(500).json(error.message);
  }
});

// Create a New Holiday
router.post('/', withAuth, async (request, response) => {
  try {
    const holidayData = await Holiday.create({
      destination_location: request.body.destination_location,
      start_date: request.body.start_date,
      end_date: request.body.end_date,
      user_id: request.session.user_id,
      total_budget: request.body.total_budget,
      holiday_id: request.body.id
    });
    request.session.save(() => {
      request.session.holiday_id = holidayData.id;
      request.session.loggedIn = true;

      response.status(200).json(holidayData);
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).json(error.message);
  }
});

module.exports = router;