var nodemailer = require('nodemailer');
var settings = require('../settings');
// https://github.com/sahat/Nodemailer
exports.sendmail = function (mailOptions, done) {
    //var smtpTransport = nodemailer.createTransport("SMTP", settings.mailerConfig);
    try {
        var transport = nodemailer.createTransport(settings.mailerConfig);
        transport.sendMail(mailOptions, function (error, response) {
            if (error) {
                return done(null, error);
            } else {
                //console.log("Message sent: " + response.message);
                //return done(response.message);
                return done(true);
            }

            // if you don't want to use this transport object anymore, uncomment following line
            transport.close(); // shut down the connection pool, no more messages
        });
        //return done(null, 'Error adrede');

    } catch (ex) {
        return done(null, ex);
    }
}