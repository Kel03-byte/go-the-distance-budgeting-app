// Beginning of API Route mapping

const router = require('express').Router();
const userRoutes = require('./user-routes');
const holidayRoutes = require('./holiday-routes');
const expenseRoutes = require('./expense-routes')

router.use("/users", userRoutes);
router.use("/holiday", holidayRoutes);
router.use("/expenses", expenseRoutes);

module.exports = router;