'use strict'

const store = require('../store')

const switchPlayer = function () {
  if (store.player === 'X') {
    store.player = 'O'
  } else {
    store.player = 'X'
  }
}

const checkForWin = function () {
  console.log('checkforwin', store.game)
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0]) {
    return true
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3]) {
    return true
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6]) {
    return true
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0]) {
    return true
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1]) {
    return true
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2]) {
    return true
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0]) {
    return true
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[2]) {
    return true
  }
  return false
}

const checkForDraw = function () {
  if (!checkForWin() && !store.game.cells.includes('')) {
    return true
  }
}

store.player = 'X'
console.log(store.player)

const clearBoard = function () {
  $('.tiles').text('')
  store.player = 'X'
}

module.exports = {
  checkForWin,
  checkForDraw,
  clearBoard,
  switchPlayer
}
