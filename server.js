const express = require('express');
const session = require('express-session');
const compression = require('compression');
const passport = require('passport');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

//if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//connect to DB
connectDB();

require('./auth/auth');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'Our secret.',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));

//   app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

//Define Routes
app.get('/', function (req, res) {
  res.send('connected');
});
app.use('/login', require('./routes/api/login'));
app.use('/signup', require('./routes/api/signup'));
app.use('/login_success', require('./routes/api/checkLogin'));

//Handle Errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
