/**
 * Created by Owner on 7/3/2017.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // req.assert('email', 'A valid email is required' ).notEmpty().isEmail();
    // var errors = req.validationErrors();
    // if(errors) {
    //     res.render('index', {errors: errors[0].msg});
    // }
    res.render('index', {errors: ""});
});

router.post('/', function(req, res, next) {
    req.assert('email', 'A valid email is required' ).notEmpty().isEmail();
    var errors = req.validationErrors();
    if(errors) {
        res.render('index', {errors: errors[0].msg});
    }
    else {
        console.log(req.body.email+" before");

        res.redirect('/newsletter/thankyou?email='+req.body.email);
    }

});

router.get("/thankyou", function(req, res, next) {
    console.log(req.body.email+" after");
    res.render('thankyou', {email: req.query.email});

});

module.exports = router;
