const db = require('../../../data/db-config');


function getAll(){
  return db('Equine')
}



module.exports = {
  getAll,
}