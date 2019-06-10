// server.js
const express = require('express');
const app = express();

//twilio setting
const accountSid = 'AC9c41fe02f3156110ea0c5c159a774a08';
const authToken = '87fafa4cdbbbeb3664dcb1f22ba3efd3';
const client = require('twilio')(accountSid, authToken);

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/my-angular-app'));
// Start the app by listening on the default
// Heroku port

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/send-sms/:no', function(req, res, next) {
	client.messages
	  .create({
	     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
	     from: '+12056357458',
	     to: '+919511679452'
	   })
	  .then(message => console.log(message.sid));
	res.send({
	   "msg": "count",
	   "success": true,
		"data":4
	});
});

app.listen(process.env.PORT || 8080);