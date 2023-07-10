const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll(
  // including associated Products
  { include: [Product] }
  )
  .then((categoryData) => {
    res.json(categoryData);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(
    req.params.id,
  // including associated Products
    { include: [Product] }
    )
    .then(categoryData => {
  // send message if no category with the 'id' exists
      if (!categoryData) {
        res.status(404).json({ message: 'No Category found with this id!' });
      return;
      }
      res.json(categoryData)
  })
  .catch((err) => {
    res.json(err);
  });
});


  // create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
  .then((newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});

  // update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
  // where statement with the parameter 'id' to be updated
    where: { id: req.params.id, },
  })
  .then(updatedCategory => {
  // send message if no category with the 'id' exists
    if (!updatedCategory) {
      res.status(404).json({ message: 'No Category found with this id!' });
    return;
    }
    res.json(updatedCategory)
  })
  .catch((err) => res.json(err));  
});


  // delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
  // where statement with the parameter 'id' to be deleted
    where: {
      id: req.params.id,
    },
  })
  .then(deletedCategory => {
  // send message if no category with the 'id' exists
    if (!deletedCategory) {
      res.status(404).json({ message: 'No Category found with this id!' });
    return;
    }
  // send message of category deletion
    res.json({ message: 'Category deleted!' })
  })
  .catch((err) => res.json(err));
});


module.exports = router;

