const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const emailRoutes = require('./routes/emailRoutes');
const contactRoutes = require('./routes/contactRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/emails', emailRoutes);
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 5000;
const host = process.env.HOST || '0.0.0.0'; 

app.listen(PORT, () => {
    console.log(`Server running on port http://${PORT}:${port}`);
});
