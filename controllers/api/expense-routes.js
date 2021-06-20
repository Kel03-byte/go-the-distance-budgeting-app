// Expense Route to find and create an Expense

const router = require("express").Router();
const { Expense } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (request, response) => {
  try {
    const expenseData = await Expense.findAll({
    });
    response.status(200).json(expenseData);
    console.log("expenseData", expenseData);
  } catch (error) {
    console.log(error.message);
    response.status(500).json(error.message);
  }
});

// Create a New Expense
router.post('/', withAuth, async (request, response) => {
  try {
    const expenseData = await Expense.create({
      expense_name: request.body.expense_name,
      cost: request.body.cost,
      category: request.body.category,
      holiday_id: request.session.holiday_id,
      user_id: request.session.user_id,
    });
    request.session.save(() => {
      request.session.loggedIn = true;
      response.status(200).json(expenseData);
    });
  } catch (error) {
    console.log(error);
    console.log(error.message);
    response.status(500).json(error.message);
  }
});

module.exports = router;