const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/react-job';
mongoose.connect(DB_URL);

mongoose.connection.on('connected', function () {    
  console.log('Mongoose connection open to ' + DB_URL);  
});    

mongoose.connection.on('error',function (err) {    
  console.log('Mongoose connection error: ' + err);  
}); 

const models = {
  user: {
    user: { type: String, requrie: true },
    pwd: { type: String, requrie: true },
    type: { type: String, requrie: true},
    avatar: { type: String },
    desc: { type: String },
    title: { type: String },
    company: { type: String},
    monay: { type: String },
  },
  chat: {
  }
}

Object.keys(models).forEach(model => {
  mongoose.model(model, new mongoose.Schema(models[model]));
})

module.exports = {
  getModel: name => mongoose.model(name)
}