const { MongoClient } = require('mongodb');

const dbName = 'samik'; 
const url = "mongodb://127.0.0.1:27017";

let db;

async function connectDB() {
    try {
        console.log("hello wrodld???????????")
        const conn = new MongoClient(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
               const client = await conn.connect();
      db = client.db(dbName);
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  }
  
  function getDB() {
    if (!db) {
      throw new Error('Database not connected');
    }
    return db;
  }
  

module.exports = {
  connectDB,
  getDB,
};
