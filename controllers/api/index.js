const router = require("express").Router();
const userRoutes = require("./user-routes");
const holidayRoutes = require("./holiday-routes");

router.use("/users", userRoutes);

router.use("/holiday", holidayRoutes);

module.exports = router;
