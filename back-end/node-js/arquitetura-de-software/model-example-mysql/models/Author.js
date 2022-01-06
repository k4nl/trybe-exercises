const connection = require('./connection');
const connectionMongo = require('./connectionMongo');
const { ObjectId } = require('mongodb');

const getNewAuthor = ({ id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName, 
    fullName,
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors'
  );
  return authors.map(serialize).map(getNewAuthor);
}

const getDataFromMongo = async () => {
  return connectionMongo()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => {
      return authors.map(({ _id, firstName, middleName, lastName}) => {
        return getNewAuthor({ 
          id: _id,
          firstName,
          middleName,
          lastName
        })
      })
    })
}

module.exports = {
  getAll,
  getDataFromMongo,
}