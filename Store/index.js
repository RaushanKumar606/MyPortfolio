require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors'); 
const connectDB = require('./src/db/db');
const contact = require('./src/router/AllRouter');
const education = require('./src/router/AllRouter');
const skill = require('./src/router/AllRouter');
const peoject = require('./src/router/AllRouter');
const service = require('./src/router/AllRouter');

const educationPost = require('./src/router/AllPost');
const skillPost = require('./src/router/AllPost');
const projectPost= require('./src/router/AllPost');
const servicePost= require('./src/router/AllPost');


const  corsOptions = {
  origin: "http://localhost:5174",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
 
};
// app.use(bodyParser.json());
// Use CORS middleware
app.use(cors(corsOptions));
app.use(express.json()); 
app.use('/api', educationPost);
app.use('/api', skillPost);
app.use('/api', projectPost);
app.use('/api', servicePost);
// GET METHODS

app.use('/api', contact);
app.use('/api', education);
app.use('/api', skill);
app.use('/api', peoject);
app.use('/api', service);

const PORT =process.env.PORT|| 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
