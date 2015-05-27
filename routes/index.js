var express = require('express');
var router = express.Router();
var mail = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("hola");
	var transporter = mail.createTransport();
	transporter.sendMail({
    from: 'lucia_0189@hotmail.com',
    to: 'analucia0189@gmail.com',
    subject: 'hello',
    text: 'hello world!'
}, function(err, info){
	if(err){
		console.log(err);
	}
	else{
		console.log(info);
	}
});
  res.render('index', { title: 'Express' });
});

module.exports = router;
