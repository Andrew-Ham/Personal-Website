const express = require('express');
const dotenv = require('dotenv');
const mg = require('mailgun-js');

dotenv.config();

const mailgun = () => mg ({
    apiKey: process.env.REACT_APP_API_MAILGUN_API_KEY,
    domain: process.env.REACT_APP_API_MAILGUN_DOMAIN,
});

const app = express();
/*Use 2 middleware below. With these we can get the payload of the api request and convert it to req.body (request body)*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*Here we need to create our post api */
app.post('/api/email', (req,res) => {
    const { name, email, subject, message } = req.body;
    mailgun().messages().send({
        from: "Andrew Ham <hyk14371@gmail.com>",
        to: 'yham023@aucklanduni.ac.nz',
        name: `${name}`,
        subject: `${subject}`,
        html: `<p>${email}, ${message}</p>`,
    }, 
    (error, body) => {
        if(error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error in sending email'});
        } else {
            console.log(body);
            res.send({message: 'Email sent successfully'});
        }
    }
    );
});

const port = process.env.port || 4000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
})