require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const express = require('express');
const connectToDB = require('./db');
const equipmentRoutes = require('./routes/equipmentRoutes');
const userRoutes = require('./routes/userRoutes');
const rateLimit = require('express-rate-limit');
const { logger, morganMiddleware } = require('./utils/logger');
const errorHandler = require('./utils/errorHandler');
const app = express();

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 15,
    message: 'Too many requests from this IP, please try again after 15 minutes'
});

app.use(helmet());

const corsOptions = {
  origin: 'http://localhost:3000', // Default to development settings
  credentials: true, // Allow cookies and authentication headers
};

if (process.env.NODE_ENV === 'production') {
  corsOptions.origin = 'https://yourproductionfrontendurl.com'; // Production front-end URL
  corsOptions.credentials = false; // Typically, credentials are not needed for general production use unless specifically required
}

app.use(cors(corsOptions));

app.use(morganMiddleware);

app.use(express.json());

app.use('/api', apiLimiter);

app.use('/api', equipmentRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

connectToDB().then(() => {
  const PORT = 3005;
  app.listen(PORT, () => {
    logger.info(`MongoDB Connected. Server running on port ${PORT}`);
  });
}).catch(err => {
  logger.error('Failed to start the server due to database connection issues: ' + err);
});
