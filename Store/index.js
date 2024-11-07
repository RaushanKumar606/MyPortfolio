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




const  corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
 
};
// app.use(bodyParser.json());
// Use CORS middleware
app.use(cors(corsOptions));
app.use(express.json()); 
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
