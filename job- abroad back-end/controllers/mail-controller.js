const userMailer = require('../nodemailer/user-emailer')

module.exports = {
    sendEmail: async (req, res, next) => {
        try {
            console.log('Im in post')
            userMailer(req.body);
        } catch (err) {
            console.log(err, 'error<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
        }
    }
}