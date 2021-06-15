const { request } = require("express");
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Holiday, User } = require("../models");


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
router.get("/holiday", async (request, response) => {
  try {
    const holidayData = await Holiday.findAll({
      attributes: [
        "id",
        "destination_location",
        "start_date",
        "end_date",
        "total_budget",
      ],
      include: [{model: User, attributes: ["username"]}]
      });
    const holidays = holidayData.map((data) => data.get({ plain: true }));
    response.render("holiday", { holidays });
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;

//


