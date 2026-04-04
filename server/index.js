const dotenv = require('dotenv');
const express = require('express');

const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes')
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Gripe API is running' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
