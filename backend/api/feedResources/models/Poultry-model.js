const db = require('../../../data/db-config');

function getAll(){
    return db('Poultry');
}

function getById(id){
    return db('Poultry')
          .where('id', id)
          .first()
          
}

function deleteById(id){
    return db('Poultry')
          .where('id', id)
          .del();
}

function updateById(id, updates){
    return db('Poultry')
          .where('id', id)
          .update(updates);
}

function create(name, description, pricePerBag, pricePer20, pricePer40, url) {
  return db("Poultry").insert({
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