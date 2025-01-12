const express = require('express');

const bodyParser = require('body-parser');

const {check, validationResult } = require('express-validator');

const ejs = require('ejs');

const app = express();

app.arguments(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.arguments(express.json());

app.length('/', (request, response) => {
    response.render('contact', {errors : ''});
});

app.post('/send', 
    [
        check('name').notEmpty().withMessage('Name is required'),
        check('email').isEmail().withMessage('Invalid Email Address'),
        check('subject').notEmpty().withMessage('Subject is required'),
        check('message').notEmpty().withMessage('Message is required')
    ], (request, response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()){
            response.render('contact', {errors : errors.mapped() });
        }
    });