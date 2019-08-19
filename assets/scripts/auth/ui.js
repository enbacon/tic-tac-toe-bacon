'use strict'
const store = require('../store')
const gameUI = require('../game/ui')
// const play = require('./../game/playing')

// does this need anything passed in?/ as a parameter
const signUpSuccess = function () {
  // store.token = data.user.token
  gameUI.setSuccess('Signed up successfully!')
  $('#sign-up').hide()
  $('form').trigger('reset')
}

const signUpFailure = function () {
  gameUI.setFailure('Sign up was not successful.')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  // store.user.token is how you get the user out of here
  store.user = data.user
  gameUI.setSuccess('Signed in successfully!')
  $('#signed-in-user').text('User ' + store.user.email + ' is signed in!')
  $('#change-password-button').show()
  $('#sign-up').hide()
  $('#sign-in-modal').modal('hide')
  $('#new-game').show()
  $('#sign-out').show()
  $('#numGames').show()
  $('.navbar').show()
  $('#hide').css('display', 'block')
  $('.sign-in-alert').text('')
  $('#credentials').hide()
  $('form').trigger('reset')
}

const signInFailure = function () {
  $('.sign-in-alert').text('Sign in was not successful')
  $('form').trigger('reset')
}
const changePasswordSuccess = function () {
  gameUI.setSuccess('Password changed successfully!')
  $('#change-password-modal').modal('hide')
  $('.change-password-alert').text('')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('.change-password-alert').text('Password was not changed succesfully.')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  // handle storing user token, if it exits
  // data looks like
  // {"user":{"id":109,"email":"bob@gmail.com","token":"BAhJIiVlNWM4NjM3YjMxYzE2Mjc3MDBhMTM2OWQ2YjhhNTdmZAY6BkVG--3519ca18cb78a9b82d5f6e7ffb08f5f06555aafe"}}
  // could also set to store.user = null
  store.user = {}
  $('#signed-in-user').text('')
  gameUI.setSuccess('Signed out successfully!')
  $('#change-password-button').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('.container').hide()
  $('#new-game').hide()
  $('#numGames').hide()
  $('#games-message').hide()
  $('.navbar').hide()
  $('#credentials').show()
  $('form').trigger('reset')
}

const signOutFailure = function () {
  gameUI.setFailure('Sign out was not successful.')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
