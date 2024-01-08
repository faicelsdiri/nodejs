var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'faicel.sdiri@gmail.com',
     pass: ''
  }
});

var mailOptions = {
  from: 'faicel.sdiri@gmail.com',
  to: 'faicel.sdiri2@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});