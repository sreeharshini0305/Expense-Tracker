const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(
  'mongodb+srv://sreeharshinimandala:Expensetracker123@expensetracker.bqnwa2p.mongodb.net/?retryWrites=true&w=majority&appName=ExpenseTracker',
  { useNewUrlParser: true, useUnifiedTopology: true }
);


const connection = mongoose.connection

connection.on('connected', () =>
  console.log('Mongo DB Connection Successful')
);