var express = require('express'),
	router = express.Router(),
	auth = require('./app/auth.js'),
	users = require('./app/users.js'),
	gyms = require('./app/gyms.js');

// setup routes
// Route can be acccessed by anyone
router.post('/login', auth.login);

// Routes can only be accessed by authenticated users
router.get('/api/v1/users', users.getAll);
router.get('/api/v1/gyms', gyms.getAll);




module.exports = router;