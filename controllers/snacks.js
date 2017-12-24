const model = require('../models/snack.js')
const uuid = require('uuid/v4')

const getAll = (req, res, next) => {
  res.json({data: model.snacks })
}

const getOne = (req, res, next) => {
  const id = req.params.id
  const snacks = model.snacks.find(snack => snack.id === id)
  if (!snack) return next({ status: 404, message: `Could not find snack with id of ${id}` })

  res.json({ data: snack })
}

const postOne = (req, res, next) => {
  const { item, foodType } = req.body
  if (!item || !foodType) return next({ status: 400, message: `Fields item and food type are required` })

  const snack = { id: uuid(), item, foodType }
  model.snacks.push(snack)
  res.status(201).json({ data: snack })
}

const putOne = (req,res,next) => {
  const id = req.params.id
  const snack = model.snacks.find(snack => snack.id === id)
  if (!snack) return next({ status: 404, message: `Could not find snack with id of ${id}` })

  const { item, foodType } = req.body
  if (!item || !foodType) return next({ status: 400, message: `Fields item and food type are required` })

  snack.item = item
  snack.foodType = foodType
  res.status(200).json({ data: snack })
}

const delOne = (req,res,next) => {
  const id = req.params.id
  const snack = model.snacks.find(snack => snack.id === id)
  if (!snack) return next({ status: 404, message: `Could not find snack with id of ${id}` })

  const index = model.snacks.indexOf(snack)
  model.snacks.splice(index, 1)
  res.status(204).json()
}


module.exports = { getAll, getOne, postOne, putOne, delOne}
