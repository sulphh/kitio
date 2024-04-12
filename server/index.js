require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const express = require('express');
const connectToDB = require('./db');
const equipmentRoutes = require('./routes/equipmentRoutes');
const userRoutes = require('./routes/userRoutes');
const rateLimit = require('express-rate-limit');
const app = express();

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 15, 
    message: 'Too many requests from this IP, please try again after 15 minutes'
});

app.use(helmet()); 
app.use(cors());

app.use(express.json());

app.use('/api', apiLimiter);

app.use('/api', equipmentRoutes);
app.use('/api/users', userRoutes);

connectToDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`MongoDB Connected. Server running on port ${PORT}`));
}).catch(err => {
  console.error('Failed to start the server due to database connection issues', err);
});
