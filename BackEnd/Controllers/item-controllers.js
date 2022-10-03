const express = require('express');
const db = require('../Models/database-model');
const getRecordsModel = require('../Models/get-records-model')

const itemController = {};

itemController.createItem = (req, res, next) => {
  req.locals = {
    queryData: {},
  };

  req.locals.queryData.tableName = 'item';
  req.locals.queryData.name = req.body.name;

  next();
};

itemController.getItems = (req, res, next) => {
    console.log(res.locals.response.rows[0].id);

    const query = new getRecordsModel();
    query.setTableName("items");
    query.setConditions(`owner = ${res.locals.response.rows[0].id}`)

    req.locals.queryData = query.queryData;
    console.log("HELLO");
    console.log(res.locals.queryData);
    next();
    // const query = new getRecordsModel();
    // query.setConditions = (`owner = '${}'`)
}

module.exports = itemController;
