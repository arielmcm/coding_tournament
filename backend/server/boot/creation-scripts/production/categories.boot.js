const categories = require('../../data/production/categories');
const ObjectId = require('mongodb').ObjectID;

module.exports = loopback => {
  const Category = loopback.models.Category;

  categories.forEach(category => {
    category.id = new ObjectId(category.id);
    Category
      .findOrCreate({where: {id: category.id}}, category)
      .catch(error => console.log(error));
  });
};
