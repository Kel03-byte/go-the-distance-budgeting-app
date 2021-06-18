const router = require("express").Router();
const { response } = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { User } = require("../../models");

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
      id: request.body.id,
      username: request.body.username,
      password: request.body.password,
      email: request.body.email,
    });
    request.session.save(() => {
      request.session.loggedIn = true;
      request.session.user_id = userData.id;
      request.session.username = userData.username;
      response.status(200).json(userData);
    });
  } catch (error) {
    response.status(400).json(error.message);
  }
});

// Login
router.post("/login", async (request, response) => {
  try {
    const userData = await User.findOne({
      where: {
        username: request.body.username,
      },
    });

    if (!userData) {
      response.status(400).json({ message: "Incorrect username or password" });
      return;
    }

    const validPassword = await userData.checkPassword(request.body.password);

    if (!validPassword) {
      response.status(400).json({ message: "Incorrect username or password" });
      return;
    }

    request.session.save(() => {
      request.session.loggedIn = true;
      request.session.username = userData.username;
      request.session.user_id = userData.id;

      response.status(200).json({ user: userData, message: "Logged In" });
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).json(error.message);
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
