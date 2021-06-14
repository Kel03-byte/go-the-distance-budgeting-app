const router = require("express").Router();
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const User = require("../../models/User");

// Get all users
router.get("/", async (request, response) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    response.status(200).json(userData);
  } catch (err) {
    console.log(err);
    response.status(500).json(err);
  }
});

router.post("/", async (request, response) => {
  try {
    const userData = await User.create({
      username: request.body.username,
      password: request.body.password,
      email: request.body.email,
    });
    request.session.save(() => {
      request.session.loggedIn = true;
      response.status(200).json(userData);
    });
  } catch (error) {
    response.status(400).json(error.message);
  }
});

module.exports = router;
