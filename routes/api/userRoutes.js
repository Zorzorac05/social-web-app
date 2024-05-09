const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// /api/users  get all users or add a new user
router.route('/').get(getUser).post(createUser);
// /api/users/:id  get user by id or update a user by id
router.route('/:id').get(getSingleUser).put(updateUser);
// /api/users/:id  delete a user
router.route('/:id').delete(deleteUser);
// /api/users/:id/friends/:friendID  makes changes to friends
router.route('/:userID/friends/:friendID').post(addFriend).delete(deleteFriend);

module.exports = router;