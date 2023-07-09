const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll(
  // be sure to include its associated Product data
    { include: [Product] }
  )
  .then((tagData) => {
    res.json(tagData);
  })
  .catch((err) => {
    res.json(err);
  });
});


router.get('/:id', (req, res) => {
  // find a single tag by its 'id'
  Tag.findByPk(
    req.params.id,
  // be sure to include its associated Product data
    { include: [Product] }
  )
  .then((tagData) => {
    res.json(tagData);
  })
  .catch((err) => {
    res.json(err);
  });
});


  // create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  });
});


  // update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id, },
    })
    .then((updatedTag) => {
      res.json(updatedTag);
    })
      .catch((err) => res.json(err)); 
});


  // delete a tag by its `id` value
  router.delete('/:id', (req, res) => {
    Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
  });
  

module.exports = router;
