const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const athenaDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('Succesfully connection to athenas database');
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ msg: 'Internal Error,Database connection failed !!' });
  }
};

module.exports = athenaDB;
athenaDB();
