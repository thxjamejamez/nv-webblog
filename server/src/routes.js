const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const BlogController = require('./controllers/BlogController')
const isAuthenController = require('./authen/isAuthenController')


module.exports = (app) => {
  // User
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

  //Blog
  app.get('/blogs',
    BlogController.index
  )
  app.post('/blog',
    BlogController.create
  )
  app.put('/blog/:blogId',
    BlogController.put
  )
  app.delete('/blog/:blogId',
    BlogController.remove
  )
  app.get('/blog/:blogId',
    BlogController.show
  )

  app.post('/login',
    UserAuthenController.login
  )
}