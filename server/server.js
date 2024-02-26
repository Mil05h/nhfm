const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
// const routes = require('./routes');
// app.use('/api', routes);

app.get('/api/data', (req, res) => { 
    // Handle your API logic here 
    res.json({ message: 'Hello from Express!' });
  }); 

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// C:/Program%20Files/Java/jdk-21/