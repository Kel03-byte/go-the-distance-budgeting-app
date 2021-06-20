// Home Route mapping - what the user will see!

const router = require("express").Router();
const { Holiday, User, Expense } = require("../models");

// Render Home Page
router.get("/", async (request, response) => {
  response.render("homepage", {
    loggedIn: request.session.loggedIn,
  });
});

// Render Sign Up Page
router.get("/signup", (request, response) => {
  response.render("signup");
});

// Render Log In Page
router.get("/login", (request, response) => {
  if (request.session.loggedIn) {
    response.redirect("/create");
    return;
  }
  response.render('login');
});

// Render Create Holiday Page
router.get("/create", (request, response) => {
  response.render("create-holiday", {
    loggedIn: request.session.loggedIn,
  });
});

// // Render Holiday Details
router.get("/holiday", async (request, response) => {
  try {
    const holidayData = await Holiday.findAll({
      include: [
        {
          model: User,
          attributes: [
            'username',
          ],
        },
      ],
    });
    const holidays = holidayData.map((data) => data.get({ plain: true }));
    response.render("holiday", {
      holidays,
      loggedIn: request.session.loggedIn,
    });
  } catch (error) {
    response.status(500).json(error.message);
  }
});

// Render Expense Details
router.get("/expenses", async (request, response) => {
  try {
    const expenseData = await Expense.findAll({
      include: [{ model: Holiday }, { model: User }],
    });
    const expenses = expenseData.map((data) => data.get({ plain: true }));
    response.render("expenses", {
      expenses,
      loggedIn: request.session.loggedIn
    });
  } catch (error) {
    response.status(500).json(error.message);
  }
});

module.exports = router;