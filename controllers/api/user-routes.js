const router = require('express').Router();
const User = require('../../models/User');

router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });
        request.session.save(() => {
            request.session.loggedIn = true;
            res.status(200).json(userData);
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;