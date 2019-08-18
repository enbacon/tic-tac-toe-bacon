'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const logic = require('./logic')

const onNewGame = function (event) {
  event.preventDefault()
  logic.clearBoard()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGameUpdate = function (event) {
  event.preventDefault()
  store.tile = $(event.target).attr('id')
  const boxText = $(event.target).text()
  if (boxText && (logic.checkforDraw === true || store.game.over === true)) {
    ui.invalidMove()
  } else
  if (!boxText && !store.game.over === true) {
    $(event.target).text(store.player)
    store.game.cells[store.tile] = store.player
    store.game.over = logic.checkForWin()
    api.gameUpdate()
      .then(ui.onGameUpdateSuccess)
      .then(() => logic.switchPlayer())
      .then(ui.turnNotify)
      .catch(ui.onGameUpdateFailure)
  }
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
}
