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
}

const checkForWin = function () {
  const gameBoard = store.game.cells
  let count = 0

  gameBoard.forEach(move => {
    if (!move === '') {
      count++
    }
  })
  return count
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
    store.game.cells[store.tile] = store.player
    checkForWin()
    api.gameUpdate()
      .then(ui.onGameUpdateSuccess)
      .catch(ui.onGameUpdateFailure)
    console.log(store.player)
    switchPlayer()
  } else {
    $('#message').text('Sorry, that is not a valid move!')
  }
  console.log(store.game.id)
}

module.exports = {
  onGameUpdate,
  onNewGame
  // checkWin
}
