const UserController = require('./controllers/UserController')

module.exports = (app) => {
  app.get('/users',
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
}