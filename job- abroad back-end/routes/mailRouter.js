const express = require('express');

const {sendEmail} =require('../controllers/mail-controller');


const router = express.Router();

router.post('/', sendEmail);

module.exports = router;