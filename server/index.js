require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const equipmentRoutes = require('./routes/equipmentRoutes');
const app = express();

app.use(express.json());
app.use('/api', equipmentRoutes);  

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    const PORT = 3000; 
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));