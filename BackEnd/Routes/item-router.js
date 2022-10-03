const express = require('express');
const databaseController = require('../Controllers/database-controller');
const itemController = require('../Controllers/item-controllers');
const userController = require('../Controllers/user-controller');
const router = express.Router();

router.post(
  '/create',
  itemController.createItem,
  databaseController.insertRecord,
  (req, res, next) => {
    //Handle Create Item Response Here
    console.log(`item ${res.locals} was created succesfully`);
    res.status(418).send(res.locals);
  }
);

router.get('/', databaseController.createQueryData, 
userController.getUserId, 
databaseController.getRecords,
itemController.getItems, 
databaseController.getRecords, 
(req, res, next) => {
    //Handle Create Item Response Here
    res.status(200).send(res.locals.response.rows)
    
})

module.exports = router;
