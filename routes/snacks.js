const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/snacks')

router.get('/snacks', ctrl.getAll)

router.get('/snacks/:id', ctrl.getOne)

router.post('/snacks', ctrl.postOne)

router.put('/snacks/:id', ctrl.putOne)

router.delete('/snacks/:id', ctrl.delOne)

module.exports = router
