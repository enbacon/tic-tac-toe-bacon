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
    store.game.over = true
    console.log('top row')
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3]) {
    store.game.over = true
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6]) {
    store.game.over = true
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0]) {
    store.game.over = true
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1]) {
    store.game.over = true
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2]) {
    store.game.over = true
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0]) {
    store.game.over = true
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[2]) {
    store.game.over = true
  } else if (!store.game.cells.includes('')) {
    console.log('draw')
  } else if (store.game.cells.includes('')) {
    console.log('game still in play')
    switchPlayer()
  }
  console.log('game over?', store.game.over)

  return store.game.over
}

module.exports = {
  checkForWin
}
