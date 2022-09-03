const router =require('express').Router();

const {index, contact, about, services,login, admin} = require('../controllers/mainController');

const adminCheck = require('../middlewares/adminCheck');

router
       .get('/', index)
       .get('/contact', contact)
       .get('/about',about)
       .get('/services', services)
       .get('/admin',adminCheck, admin)
       .get('/login',login)

module.exports = router;