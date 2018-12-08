const express = require('express');
const model = require('./model')

const Router = express.Router();
const User = model.getModel('user');

Router.get('/list', (req, res) => {
  User.find({ user, type }, (err, doc) => {
    return res.json(doc);
  })
})

Router.post('/register', (req, res) => {
  const { user, pwd, type } = req.body;
  User.findOne({user}, (err, doc) => {
    if(doc) {
      return res.json({ code: 1, meg: '用户名已存在' })
    }
    User.create({ user, pwd, type }, (err, doc) => {
      if(err) {
        return res.json({code: 1, msg: '后端出错了'})
      }
      return res.json({code: 0})
    })
  })
})

Router.get('/info', (req, res) => {
  return res.json({ code: 1});
})

module.exports = Router;