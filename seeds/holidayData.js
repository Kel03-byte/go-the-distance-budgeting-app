const Holiday = require("../models/Holiday");

const holidayData = [
  {
    destination_location: "Paris",
    start_date: "2021-06-01",
    end_date: "2021-06-05",
    total_budget: 4000,
  },
];
const seedCategories = () => Holiday.bulkCreate(holidayData);
module.exports = seedCategories;
