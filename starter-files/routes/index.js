const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')
// Do work here
router.get('/', storeController)

router.get('/reverse/:name', (req, res) => {
  // res.json({name: 'Lawrence', age: '28', cool: false});
  console.log(req)
  res.send([...req.params.name].reverse().join(''))
});



module.exports = router;
