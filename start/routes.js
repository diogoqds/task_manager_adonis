'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')

Route.post('sessions', 'SessionController.store').validator('Session')

Route.post('forgot_password', 'ForgotPasswordController.store').validator('ForgotPassword')
Route.put('forgot_password', 'ForgotPasswordController.update').validator('ResetPassword')


Route.group(() => {
  Route.post('files', 'FileController.store')

  Route.get('files/:id', 'FileController.show')
  Route.resource('projects','ProjectController')
  .apiOnly()
  .validator(new Map([
    [['projects.store'], ['Project']],
    [['projects.update'], ['Project']],
  ]))
  Route.resource('projects.tasks','TaskController')
  .apiOnly()
  .validator(new Map([
    [['tasks.store'], ['Task']],
    [['tasks.update'], ['Task']],
  ]))
}).middleware(['auth'])
