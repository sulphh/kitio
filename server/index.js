const express = require('express');
const mongoose = require('mongoose');
const equipmentRoutes = require('./routes/equipmentRoutes');

// First, create the Express app
const app = express();

// Then, use express.json() middleware to parse JSON bodies
app.use(express.json());

// Then, define your routes
app.use('/api', equipmentRoutes);  

// Connect to MongoDB before starting the server
mongoose.connect('mongodb://localhost/kitio', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Only start listening on the port after a successful connection
    const PORT = 3000; 
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));