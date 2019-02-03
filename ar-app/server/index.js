// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
const express = require('express');
const cors = require('cors');
const app = express(); //alias from the express function

//sendgrid api key
sgMail.setApiKey('____YOUR___API__KEY');

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Express server Welcome page
app.get('/', (req, res) => {
    res.send("Welcome to the Sendgrid Emailing Server");
});


// run 'nodemon index.js' to acess server on port 4000
app.listen(4000, () => console.log("Running on Port 4000"));
