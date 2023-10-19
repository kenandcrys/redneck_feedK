const db = require('../../../data/db-config');

function getAll(){
    return db('SheepAndGoat');
}

function getById(id){
    return db('SheepAndGoat')
          .where('id', id)
          .first()
          
}

function deleteById(id){
    return db('SheepAndGoat')
          .where('id', id)
          .del();
}

function updateById(id, updates){
    return db('SheepAndGoat')
          .where('id', id)
          .update(updates);
}

function create(name, description, pricePerBag, pricePer20, pricePer40, url) {
  return db("SheepAndGoat").insert({
    name: name,
    description: description,
    pricePerBag: pricePerBag,
    pricePer20: pricePer20,
    pricePer40: pricePer40,
    url: url,
  });
}

module.exports = {
  getAll,
  getById,
  deleteById,
  updateById,
  create,
}