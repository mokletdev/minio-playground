const Router = require('restify-router').Router;

const router = new Router();

/** @module: Upload Image **/
const { uploadImage } = require('./uploadImage');
router.post('/image', uploadImage);

module.exports = router;
