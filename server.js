// load enviromental variables
require('dotenv').config();

const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./server_src/db'); // loads our connection to the mongo database
const passport = require('./server_src/passport');
const app = express();

const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.APP_SECRET || 'this is the default passphrase',
    store: new MongoStore({ mongooseConnection: dbConnection, useUnifiedTopology: true }),
    saveUninitialized: false,
    resave: true,
    rolling: true,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }
  })
);

// Passport Setup
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define Express routes here
/* Express app ROUTING */
app.use(require('./server_src'));

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`); //eslint-disable-line
});
