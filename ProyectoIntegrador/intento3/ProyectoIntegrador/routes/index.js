var express = require('express');
var router = express.Router();

let controlador = require('../controllers/indexController');

/* GET home page. */
router.get('/', controlador.index);

module.exports = router;
