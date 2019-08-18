'use strict'
const store = require('../store')
const logic = require('./logic')

const setFailure = function (text) {
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('#message').text(text)
}

const setSuccess = function (text) {
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#message').text(text)
}

const turnNotify = function () {
  if (logic.checkForWin() || logic.checkForDraw()) {
    return
  }
  setSuccess('Player ' + store.player + ', it is your turn!')
  console.log('turnNotify ran')
}

const newGameSuccess = function (data) {
  // // store.game provides the ENTIRE OBJECT for the new game
  store.game = data.game
  // console.log('store.game is', store.game)
  $('.container').show()
  setSuccess('You have started a new game! Player X it is your turn!')
}

const newGameFailure = function () {
  setFailure('Sorry, unable to start a new game.')
}

const onGameUpdateSuccess = function (data) {
  if (logic.checkForWin() === true) {
    setSuccess('Congratulations ' + store.player + ' you have won!!!')
  } else if (logic.checkForDraw() === true) {
    setFailure('You have tied. Try playing again!')
  }
}

const onGameUpdateFailure = function () {
  setFailure('Sorry, something went wrong, please try again.')
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
