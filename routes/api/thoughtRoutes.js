const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought
} = require('../../controllers/thoughtController');

// /api/thoughts  get all thoughts or add a new user
router.route('/').get(getThoughts).post(createThought);
// /api/thoughts/:id route to get a user 
router.route('/:id').get(getSingleThought);
// /api/thoughts/:id  delete a user
router.route('/:id').delete(deleteThought);

module.exports = router;