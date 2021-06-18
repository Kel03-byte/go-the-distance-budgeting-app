const router = require("express").Router();
const session = require("express-session");
const sequelize = require("../../config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const Expense = require("../../models/Expense");

router.post("/", async (request, response) => {
    try {
      const expenseData = await Expense.create({
        expense_name: request.body.expense_name,
        cost: request.body.cost,
        category: request.body.category,
        total_budget: request.body.total_budget,
      });
      console.log("holiday data", expenseData);
  
      request.session.save(() => {
        request.session.loggedIn = true;
        response.status(200).json(expenseData);
      });
    } catch (error) {
      response.status(400).json(error.message);
    }
  });

  // router.post("/", async (request, response) => {
  //   try {
  //     const expenseData = await Expense.create({
  //       total_budget: request.body.total_budget,
  //     });
  //     console.log("holiday data", expenseData);
  
  //     request.session.save(() => {
  //       request.session.loggedIn = true;
  //       response.status(200).json(expenseData);
  //     });
  //   } catch (error) {
  //     response.status(400).json(error.message);
  //   }
  // });
  
  module.exports = router;