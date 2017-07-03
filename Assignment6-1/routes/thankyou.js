/**
 * Created by Owner on 7/3/2017.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.post('/', function(req, res, next) {
    req.assert('email', 'A valid email is required' ).notEmpty().isEmail();
    var errors = req.validationErrors();
    if(errors) {
        res.render('index', {errors: errors[0].msg});
    }
    else {

        res.redirect('thankyou', {email: req.body.email});
    }

});

module.exports = router;
