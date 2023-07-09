const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll(
  // be sure to include its associated Products
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
  // be sure to include its associated Products
    { include: [Product] }
    )
    .then((categoryData) => {
    res.json(categoryData);
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
    where: { id: req.params.id, },
  })
  .then((updatedCategory) => {
    res.json(updatedCategory);
  })
  .catch((err) => res.json(err));  
});


  // delete a category by its `id` value
  router.delete('/:id', (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
  });

module.exports = router;
