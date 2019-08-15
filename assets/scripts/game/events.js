'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

store.player = 'X'
console.log(store.player)

const clearBoard = function () {
  $('.tiles').text('')
  store.player = 'X'
}

const onNewGame = function (event) {
  event.preventDefault()
  clearBoard()
  console.log('new game started')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const switchPlayer = function () {
  if (store.player === 'X') {
    store.player = 'O'
  } else {
    store.player = 'X'
  }
  console.log(store.player)
}

const onGameUpdate = function (event) {
  event.preventDefault()
  store.tile = $(event.target).attr('id')
  console.log(store.tile)
  const boxText = $(event.target).text()
  // add to if, if not game over, and if game exists
  // if (!boxText){
  if (!boxText) {
    $(event.target).text(store.player)
    switchPlayer()
    console.log(event)
    api.gameUpdate()
      .then(ui.onGameUpdateSuccess)
      .catch(ui.onGameUpdateFailure)
  } else {
    $('#message').text('Sorry, that is not a valid move!')
  }
  console.log(store.player)
  console.log(store.game.id)
}
// }

module.exports = {
  onGameUpdate,
  onNewGame
}
