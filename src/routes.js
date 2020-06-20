import { Router } from 'express'

import parser from './middleware/multer.middleware'

import postControllers from './controllers/post.controller'
import userControllers from './controllers/user.controller'

const router = Router()

// POSTS
router.post('/posts',
    parser.single('picture'),
    postControllers.create)

router.delete('/posts/:id', postControllers.destroy)

router.get('/posts', postControllers.getAll)

// USER MODEL
router.post('/register', userControllers.register)

router.post('/login', userControllers.login)


export default router
