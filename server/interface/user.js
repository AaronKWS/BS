const express = require("express");
const mysql = require('./sql/util');
const router = express.Router();

router.post('/login', (req, res) => {
  let data = req.body;
  mysql.query('select * from user where username="' + data.name + '" and pwd = "' + data.password + '"', function (err, result) {
    if (!err) {
      if (result.length === 0) {
        res.json({
          status: '400',
          result: '用户名或者密码错误！'
        })
      } else {
        res.json({
          status: '200',
          result: result
        })
      }
    }
  })
})

router.get('/food', (req, res) => {
  mysql.query('select * from food', function (err, result) {
    if (!err) {
      if (result.length === 0) {
        res.json({
          status: '400',
          result: []
        })
      } else {
        res.json({
          status: '200',
          result: result
        })
      }
    }
  })
})

router.get('/drink', (req, res) => {
  mysql.query('select * from drink', function (err, result) {
    if (!err) {
      if (result.length === 0) {
        res.json({
          status: '400',
          result: []
        })
      } else {
        res.json({
          status: '200',
          result: result
        })
      }
    }
  })
})

router.post('/orderlist', (req, res) => {
  let data = req.body;
  mysql.query('SELECT consume.*,computer.* FROM consume,computer where consume.userid="' + data.userid + '" and consume.computerid=computer.id;', function (err, result) {
    if (!err) {
      if (result.length === 0) {
        res.json({
          status: '400',
          result: []
        })
      } else {
        res.json({
          status: '200',
          result: result
        })
      }
    }
  })
})
module.exports = router;
