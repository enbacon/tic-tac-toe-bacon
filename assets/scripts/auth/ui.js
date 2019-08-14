'use strict'
const store = require('./../store')

// does this need anything passed in?/ as a parameter
// TODO this onlyl works for signIn to store the Token
// need to think about signUp, etc...  (if I have refactored my code so the below is only 1 success function)
const signUpSuccess = function () {
  // store.token = data.user.token
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  // $('#message').className('success') // better?
  $('#message').addClass('success') // optional: adds css class for styling
  console.log('singUpSuccess ran')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#message').text('Sign up was not successful.')
  $('#message').addClass('failure') // optional: adds css class for styling
  console.log('signUpFailure ran')
}

const signInSuccess = function (data) {
  // handle storing user token, if it exits
  // data looks like
  // {"user":{"id":109,"email":"bob@gmail.com","token":"BAhJIiVlNWM4NjM3YjMxYzE2Mjc3MDBhMTM2OWQ2YjhhNTdmZAY6BkVG--3519ca18cb78a9b82d5f6e7ffb08f5f06555aafe"}}

  // if wanted to store email
  // store.email = data.user.email
  // right below is how we are storing the user's token
  // store.user.token is how you get the user out of here
  store.user = data.user
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  // $('#message').className('success') // better?
  $('#message').addClass('success') // optional: adds css class for styling
  console.log('Successful sign in! User is ', store.user)
  $('#signed-in-user').text('User ' + store.user.email + ' is signed in!')
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#hide').css('display', 'block')
}

const signInFailure = function () {
  $('#message').text('Sign in was not successful.')
  $('#message').addClass('failure') // optional: adds css class for styling
  console.log('signInFailure ran')
}
const changePasswordSuccess = function () {
  $('#message').text('Password changed successfully!')
  $('#message').removeClass()
  $('#message').addClass('success') // optional: adds css class for styling
  console.log('changePasswordSuccess ran')
}

const changePasswordFailure = function () {
  $('#message').text('Password was not changed succesfully.')
  $('#message').addClass('failure') // optional: adds css class for styling
  console.log('changePasswordFailure ran')
}

const signOutSuccess = function () {
  // handle storing user token, if it exits
  // data looks like
  // {"user":{"id":109,"email":"bob@gmail.com","token":"BAhJIiVlNWM4NjM3YjMxYzE2Mjc3MDBhMTM2OWQ2YjhhNTdmZAY6BkVG--3519ca18cb78a9b82d5f6e7ffb08f5f06555aafe"}}
  // could also set to store.user = null
  store.user = {}
  $('#signed-in-user').text('')
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  // $('#message').className('success') // better?
  $('#message').addClass('success') // optional: adds css class for styling
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  console.log('Signed out successfully')
}

const signOutFailure = function () {
  $('#message').text('Sign out was not successful.')
  $('#message').addClass('failure') // optional: adds css class for styling
  console.log('signOutFailure ran')
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
