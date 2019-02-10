// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
const express = require('express');
const cors = require('cors');
const app = express(); //alias from the express function

//sendgrid api key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Welcome page of the express server:
app.get('/', (req, res) => {
    res.send("Welcome to the email Server");
});

app.get('/send-email', (req, res) => {

    const {recipient, sendersEmail, subject, text } = req.query;

    //Sendgrid variables
    const message = {
        to: recipient,
        from: 'example@mail.com',
        subject: subject,
        text: text,
        name: 'example'
    };

    //Sends the Email
    sgMail.send(message)
        .then(() => {
            //Celebrate
            console.log(message);
        })
        .catch(error => {

            //Log friendly error
            console.error(error.toString());
        });
});



// run 'nodemon index.js' to acess server on port 4000
app.listen(4000, () => console.log("Running on Port 4000"));