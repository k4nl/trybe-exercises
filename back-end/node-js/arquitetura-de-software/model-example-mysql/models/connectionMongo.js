const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb://127.0.0.1:27017';

const connectionMongo = () => {
  return MongoClient
    .connect(MONGODB_URL, {
      useUnifiedTopology: true
    })
    .then((conn) => conn.db('model_example'))
    .catch((err) => {
      console.error(err);
      process.exit();
    });
}

module.exports = connectionMongo;