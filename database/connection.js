require('dotenv').config();
const mongoose = require('mongoose')

class Database {

  async connection() {
    try {
      await mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
      await console.log('database connection success'.toUpperCase());
    } catch(e) {
      console.log('database connenction failed', e);
    }
    
  }
}

module.exports = new Database()