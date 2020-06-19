const router = require('express').Router()

const postControllers = require('./controllers/post.controller')
const userControllers = require('./controllers/user.controller')
const multerConfig = require('./config/multer.config')


// GETS ALL POSTS
router.post('/posts', postControllers.create)
router.delete('/posts/:id', postControllers.destroy)
router.get('/posts', postControllers.getAll)

// USER MODEL
router.post('/register', userControllers.register)
router.post('/login', userControllers.login)


module.exports = router
