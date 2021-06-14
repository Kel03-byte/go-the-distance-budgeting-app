const { Holiday } = require("../models");

const holidayData = [
  {
    destination_location: "Paris",
    start_date: "2021-06-01",
    end_date: "2021-06-05",
    duration: 5,
    total_budget: 4000,
  },
];
const seedHoliday = () => Holiday.bulkCreate(holidayData);
module.exports = seedHoliday;
