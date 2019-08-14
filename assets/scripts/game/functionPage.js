'use strict'
const store = require('../../assets/scripts/store')

store.player = 'x'

console.log(store.player)

const switchPlayer = function () {
  if (store.player === 'x') {
    store.player = 'o'
  } else {
    store.player = 'x'
  }
  console.log(store.player)
}

module.exports = {
}
