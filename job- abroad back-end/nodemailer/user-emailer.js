const nodemailer = require('nodemailer');

module.exports = async (userMail) => {
    console.log(userMail, 'userMail')
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false,
            auth: {
                user: 'atm.software0@gmail.com',
                pass: 'Qwerty123!'
            }
        })

        await transporter.sendMail({
            from: '<atm.software0@gmail.com>',
            to: `bkmet4456@gmail.com`,
            subject: 'Повідомлення з сайту PRO WORK AGENCY',
            html:
        `Нові контактні дані з сайту <strong>PRO WORK AGENCY</strong>:<br>
        <strong>Iм'я і прізвище</strong>: ${userMail.name};<br>
        <strong>Електронна адреса</strong>: ${userMail.email};<br>
        <strong>Телефон</strong>: ${userMail.phone};<br>
        <strong>Коментар</strong>: ${userMail.comment};`
        })
    } catch (err) {
        console.log(err, 'sendEmail.error')
    }
}