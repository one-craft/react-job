const express = require('express');
const model = require('./model');
const utils = require('utility');

const Router = express.Router();
const User = model.getModel('user');
const _filter = { 'pwd': 0, '__v': 0 };

Router.get('/list', (req, res) => {
  const { type } = req.query;
  User.find({ type }, (err, doc) => {
    return res.json({ code: 0, data: doc});
  })
});

Router.post('/update', function(req, res) {
  const userid = req.cookies.userid;
  if(!userid) {
    return json.dumps({code: 1});
  }
  const body = req.body;
  User.findByIdAndUpdate(userid, body, (err, doc) => {
    console.log(doc)
    const data = Object.assign({}, { user: doc.user, type: doc.type }, body);
    return res.json({ code: 0, data});
  })
})

Router.post('/login', (req, res) => {
  const { user, pwd } = req.body;
  User.findOne({ user, pwd }, _filter, (err, doc) => {
    if(!doc) {
      return res.json({code: 1, msg: '用户名或者密码错误'});
    }
    console.log(req.cookies.userid)
    console.log(doc)
    res.cookie('userid', doc._id);
    return res.json({ code: 0, data: doc });
  })
});

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
});

Router.get('/info', (req, res) => {
  const { userid } = req.cookies;
  if(!userid) {
    return res.json({code: 1});
  }
  User.findOne({_id: userid}, _filter, (err, doc) => {
    if(err) {
      return res.json({code: 1});
    }
    if(doc) {
      return res.json({ code: 0, data: doc});
    }
  })
});

module.exports = Router;