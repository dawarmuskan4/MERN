const express = require('express')
const router = express.Router()
const { getGoals ,setGoals, updateGoals, deleteGoals } = require('../controllers/goalController')

//get 
router.route('/')
  .get(getGoals)
  .post(setGoals)

//post
//router.post('/', setGoals)

//update
router.route('/:id')
  .put(updateGoals)
  .delete(deleteGoals)

//delete
//router.delete('/:id', deleteGoals)

module.exports = router