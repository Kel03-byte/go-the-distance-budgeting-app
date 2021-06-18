const e = require("express");
const { request } = require("express");
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Holiday, User, Expense } = require("../models");

// Home route
router.get("/", async (request, response) => {
  response.render("homepage", {
    loggedIn: request.session.loggedIn,
  });
});

// Sign Up route
router.get("/signup", (request, response) => {
  response.render("signup");
});

// Login route
router.get("/login", (request, response) => {
  response.render("login");
});

// Render Create Holiday Page
router.get("/create-holiday", (request, response) => {
  response.render("create-holiday");
});

// Render Holiday Details Page
// router.get("/holiday", async (request, response) => {
//   try {
//     const holidayData = await Holiday.findAll({
//       attributes: [
//         "id",
//         "destination_location",
//         "start_date",
//         "end_date",
//       ],
//       include: [
//         { Model: User, attributes: ["username"] },
//       ],
//     });

//     const holidays = holidayData.map((data) => data.get({ plain: true }));
//     response.render("holiday", { holidays });
//     console.log("holidays", holidays);
//   } catch (error) {
//     response.status(500).json(error);
//   }
// });

router.get("/holiday", async (request, response) => {
  try {
    const expenseData = await Expense.findAll({
      attributes: ["id", "cost", "category", "expense_name"],
      // include: [{ model: Holiday, attributes: ["id", "total_budget"] }],
    });

    const expenses = expenseData.map((data) => data.get({ plain: true }));
    console.log("expenses", expenses);

    response.render("holiday", { expenses });
  } catch (error) {
    response.status(500).json(error.message);
  }
});

module.exports = router;
