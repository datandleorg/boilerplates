const app = require('./app');
require('dotenv').config();
const connectDB = require('./config/database');
const PORT = process.env.PORT || 8001;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});