const express = require('express');
const athenaDB = require('./config/database');

const app = express();

athenaDB();

const PORT = 5000;

app.use(express.json());

app.use('/athena/auth', require('./routes/auth'));
app.use('/athena/login', require('./routes/user'));
app.use('/athena/tutors', require('./routes/tutors'));
app.use('/athena/reviews', require('./routes/review'));
app.use('/athena/conversation', require('./routes/conversation'));
app.use('/athena/message', require('./routes/message'));

app.listen(PORT, () => {
  console.log(`Server Succesfully Started on Port ${PORT}`);
});
