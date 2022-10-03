const express = require('express');
const databaseController = require('../Controllers/database-controller');
const userController = require('../Controllers/user-controller');

const router = express.Router();

router.post('/create', userController.createUser, databaseController.insertRecord, (req, res, next) => {
    console.log(`user ${res.locals.result} was created succesfully`);
    res.sendStatus(200);
})

<<<<<<< HEAD
<<<<<<< HEAD
router.post('/login', userController.loginUser, databaseController.getRecords, (request, response) => {
=======
router.post('/login', (request, response) => {

>>>>>>> 8acb8dd (Setting up new branch to work on routing)
    response.status(200).send('testing login function')
=======
router.post('/login', userController.loginUserBefore, databaseController.getRecords, userController.loginUserAfter, (request, response) => {
    console.log('inside user-route /login : ')
    response.status(200).send('testing login function successful')
>>>>>>> 17590b5 (Completed rerouting thru user-route.js, modified and tested middleware functions in user-controller.js)
  });

router.post('/signup', )

module.exports = router;