const {Blog} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const blogs = await Blog.findAll()
      res.send(blogs)
    } catch (err) {
      res.status(500).send({
        error: 'The blogs information was incorrect'
      })
    }
  },

  async create (req, res) {
    try {
      const blog = await Blog.create(req.body)
      res.send(blog.toJSON())
    } catch (err) {
      res.status(500).send({
        error: 'Create blog incorrect'
      })
    }
  },

  async put (req, res) {
    try {
      await Blog.update(req.body, {
        where: {
          id: req.params.blogId
        }
      })
      res.send(req.body)
    } catch (err) {
      req.status(500).send({
        error: 'Update blog incorrect'
      })
    }
  },

  async remove (req, res) {
    try {
      const blog = await Blog.findByPk({
        where: {
          id: req.params.blogId
        }
      })

      if(!blog){
        return res.status(403).send({
          error: 'The blog information was incorrect'
        })
      }

      await blog.destroy()
      res.send(blog)
    } catch (err) {
      req.status(500).send({
        error: 'The blog information was incorrect'
      })
    }
  },

  async show (req, res) {
    try {
      const blog = await Blog.findByPk(req.params.blogId)
      res.send(blog)
    } catch (err) {
      req.status(500).send({
        error: 'The blog information was incorrect'
      })
    }
  }
}