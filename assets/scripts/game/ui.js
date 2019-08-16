'use strict'
const store = require('../store')

const turnNotify = function () {
  $('#message').text('Player ' + store.player + ', it is your turn!')
  console.log('turnNotify ran')
}

const newGameSuccess = function (data) {
  store.game = data.game
  $('.container').show()
  $('#message').text('You have started a new game!Player X it is your turn!')
  $('#message').addClass('success')
  console.log('newGame started!')
}

const newGameFailure = function () {
  $('#message').text('Sorry, unable to start a new game.')
  $('#message').addClass('failure')
  console.log('newGame not started')
}

const onGameUpdateSuccess = function (data) {
  store.game = data.game
  $('#message').text('Player ' + store.player + ' it is now your turn!')
  $('#message').addClass('success')
  console.log('validMove ran succesfully!')
}

const onGameUpdateFailure = function () {
  $('#message').text('Sorry, that is not a valid move!')
  $('#message').addClass('failure')
  console.log('invalidMove made')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  turnNotify,
  onGameUpdateSuccess,
  onGameUpdateFailure
}
