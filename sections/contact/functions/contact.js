//serverless function example

exports.handler = (event, _context, callback) => {

  console.log({ event });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ boop: true })
  })

}


// Code for the serverless function if I had mailgun installed
// require('dotenv').config();
// exports.handler = (event, _context, callback) => {
//   const mailgun = require('mailgun-js');
//   const mg = mailgun({
//     apiKey: process.env.MAILGUN_API_KEY,
//     domain: process.env.MAILGUN_DOMAIN
//   });

//   const data = JSON.parse(event.body);

//   const email = {
//     from: 'Jose Manuel <jmgarcia@llamas.com>',
//     to: `${ data.name } ${ data.email }`,
//     subject: data.subject,
//     text: data.body
//   };

//   mg.messages().send(email, (error, response) => {
//     callback(error, {
//       statusCode: 200,
//       body: JSON.stringify(response)
//     });
//   });


// }