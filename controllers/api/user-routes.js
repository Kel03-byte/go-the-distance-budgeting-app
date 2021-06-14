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

// Create a new user
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

// Logout
router.post("/logout", (request, response) => {
  if (request.session.loggedIn) {
    request.session.destroy(() => {
      response.status(204).end();
    });
  } else {
    response.status(404).end();
  }
});

module.exports = router;
