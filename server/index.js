const express = require('express');
const athenaDB = require('./config/database');
const multer = require('multer');
const app = express();

athenaDB();

const PORT = 5000;

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, 'hello.png');
  },
});

const upload = multer({ storage: storage });

app.post('athena/file/upload', upload.single('file'), (req, res) => {
  res.status(200).json('file uploaded succesfully');
});

app.use('/athena/auth', require('./routes/auth'));
app.use('/athena/login', require('./routes/user'));
app.use('/athena/tutors', require('./routes/tutors'));
app.use('/athena/reviews', require('./routes/review'));
app.use('/athena/conversation', require('./routes/conversation'));
app.use('/athena/message', require('./routes/message'));

app.listen(PORT, () => {
  console.log(`Server Succesfully Started on Port ${PORT}`);
});
