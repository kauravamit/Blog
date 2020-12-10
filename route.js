const express = require("express");
const app = express();
const router = express.Router();

router.use('/user', require('./route/user-route'))
router.use('/content',require('./route/content-route'))

// router.use('/comment',require('./route/comment-route'))

module.exports = router;