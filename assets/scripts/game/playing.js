'use strict'
const store = require('../../assets/scripts/store')

store.player = 'X'

console.log(store.player)

const switchPlayer = function () {
  if (store.player === 'X') {
    store.player = 'O'
  } else {
    store.player = 'X'
  }
  console.log(store.player)
}

const clearBoard = function () {
  if (!store.target === '') {
    store.target = ''
  }
  console.log('empty?')
}

module.exports = {
  switchPlayer,
  clearBoard
}
