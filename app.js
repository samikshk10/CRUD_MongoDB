const express = require('express');
const app = express();
const { connectDB } = require('./config/dbConnect');
const routes = require('./routes/crud.routes');

app.use(express.json());

connectDB()
  .then(() => {
    app.use('/api', routes);
    const PORT = 8000; 
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error(err);
  });