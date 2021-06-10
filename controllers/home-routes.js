const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('homepage');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;