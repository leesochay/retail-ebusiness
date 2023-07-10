const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll(
  // including associated Product data
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
  // including associated Product data
    { include: [Product] }
  )
  .then(tagData => {
  // send message if no tag with the 'id' exists
    if (!tagData) {
          res.status(404).json({ message: 'No tag found with this id!' });
        return;
        }
        res.json(tagData)
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
  // where statement with the parameter 'id' to be updated
    where: { id: req.params.id, },
    })
    .then(updatedTag => {
  // send message if no tag with the 'id' exists
      if (!updatedTag) {
        res.status(404).json({ message: 'No tag found with this id!' });
      return;
      }
      res.json(updatedTag)
    })
    .catch((err) => res.json(err)); 
  });


  // delete a tag by its `id` value
  router.delete('/:id', (req, res) => {
    Tag.destroy({
  // where statement with the parameter 'id' to be deleted
      where: {
        id: req.params.id,
      },
    })
    .then(deletedTag => {
  // send message if no tag with the 'id' exists
      if (!deletedTag) {
        res.status(404).json({ message: 'No tag found with this id!' });
      return;
      }
  // send message of tag deletion
      res.json({ message: 'Tag deleted!' })
    })
    .catch((err) => res.json(err));
  });


module.exports = router;
