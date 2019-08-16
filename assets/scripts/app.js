'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.container').hide()
  $('#new-game').hide().on('submit', gameEvents.onNewGame)
  $('#numGames').hide()
  $('.box').on('click', gameEvents.onGameUpdate)
  $('.clickMe').on('click', gameEvents.onSeeAllGames)
})
