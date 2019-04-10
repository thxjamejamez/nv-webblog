const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
  app.get('/users',
    isAuthenController,
    UserController.index
  )

  app.post('/user',
    UserController.create
  )

  app.put('/user/:userId',
    UserController.put
  )

  app.delete('/user/:userId',
    UserController.remove
  )

  app.get('/user/:userId',
    UserController.show
  )

  app.post('/login',
    UserAuthenController.login
  )
}