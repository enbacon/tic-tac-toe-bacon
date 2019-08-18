'use strict'
const store = require('../store')
const logic = require('./logic')

const turnNotify = function () {
  if (logic.checkForWin() || logic.checkForDraw()) {
    return
  }
  $('#message').text('Player ' + store.player + ', it is your turn!')
  console.log('turnNotify ran')
}

const newGameSuccess = function (data) {
  // // store.game provides the ENTIRE OBJECT for the new game
  store.game = data.game
  // console.log('store.game is', store.game)
  $('.container').show()
  $('#message').text('You have started a new game! Player X it is your turn!')
  $('#message').addClass('success')
  console.log('newGame started!')
}

const newGameFailure = function () {
  $('#message').text('Sorry, unable to start a new game.')
  $('#message').addClass('failure')
  console.log('newGame not started')
}

const onGameUpdateSuccess = function (data) {
  if (logic.checkForWin() === true) {
    $('#message').text('Congratulations ' + store.player + ' you have won!!!')
  } else if (logic.checkForDraw() === true) {
    $('#message').text('You have tied. Try playing again!')
  }
  $('#message').addClass('success')
}

const onGameUpdateFailure = function () {
  $('#message').text('Sorry, something went wrong, please try again.')
  $('#message').addClass('failure')
}

const onSeeAllGamesSuccess = function (data) {
  $('#gamesMessage').text(data.games.length)
  console.log(data.games.length)
}

const onSeeAllGamesFailure = function (error) {
  console.log(error)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  turnNotify,
  onGameUpdateSuccess,
  onGameUpdateFailure,
  onSeeAllGamesSuccess,
  onSeeAllGamesFailure
}
