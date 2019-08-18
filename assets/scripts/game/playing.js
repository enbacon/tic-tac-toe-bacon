'use strict'
const store = require('../../assets/scripts/store')

store.player = 'X'

const switchPlayer = function () {
  if (store.player === 'X') {
    store.player = 'O'
  } else {
    store.player = 'X'
  }
}

const clearBoard = function () {
  if (!store.target === '') {
    store.target = ''
  }
}

module.exports = {
  switchPlayer,
  clearBoard
}
