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

// store.gameboard = store.game.cells

// const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [0, 4, 8], [2, 4, 6]]
//
// const checkForWin = function () {
//   let winStatus = false
//   for (let i = 0; i < store.games.cells.length; i++) {
//     if ((store.games.cells[0] === store.games.cells[1]) && (store.games.cells[0] === store.games.cells[2])) {
//       winStatus = true
//       return winStatus
//     }
//   }
// }

// console.log('store.game.games.cells is', store.game.games.cells)

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
    // checkForWin()
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

const onSeeAllGames = function (event) {
  event.preventDefault()
  $('#gamesMessage').show()
  api.seeAllGames()
    .then(ui.onSeeAllGamesSuccess)
    .catch(ui.onSeeAllGamesFailure)
}

module.exports = {
  onGameUpdate,
  onNewGame,
  onSeeAllGames
  // checkForThree
  // checkForWin
}
