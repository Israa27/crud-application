const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./server/database/connection');

dotenv.config({ path: 'config.env' });

const PORT = process.env.PORT || 8000;

app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Show requests in console.log
app.use(morgan('tiny'));

// Set view engine
app.set('view engine', 'ejs');

// MongoDB connection
connectDB();

// Load assets files
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

// Load routers
const router = require('./server/routes/router');
app.use('/', router);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
