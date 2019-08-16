'use strict'

const store = require('../store')

const checkForWin = function () {
  let winStatus = false
  console.log('store.game.cells is', store.game.cells)
  console.log('store.game.cells[3]', store.game.cells[3])
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0]) {
    winStatus = true
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3]) {
    winStatus = true
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6]) {
    winStatus = true
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0]) {
    winStatus = true
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1]) {
    winStatus = true
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2]) {
    winStatus = true
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0]) {
    winStatus = true
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[2]) {
    winStatus = true
  } else if (!store.game.cells.includes('')) {
    console.log('draw')
  } else {
    if (store.game.cells.includes('')) {
      console.log('game still in play')
    }
    store.winStatus = winStatus
    console.log(winStatus)
  }
  return winStatus
}

module.exports = {
  checkForWin
}
