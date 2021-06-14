const { request } = require("express");

const router = require("express").Router();

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

module.exports = router;
