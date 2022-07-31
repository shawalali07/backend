const express = require('express');
const {
  getUsers,
  getUser,
  signup,
  signin,
  updateUser,
  deleteUser,
} = require('../controllers/users');

const router = express.Router();
router.route('/').get(getUsers);
router.route('/signin').post(signin);
router.route('/signup').post(signup);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
