import { Router } from 'express'

import multerUpload from './middleware/multer.config'

import postControllers from './controllers/post.controller'
import userControllers from './controllers/user.controller'

const router = Router()

// GETS ALL POSTS
router.post('/posts',
    multerUpload.single('picture'),
    postControllers.create)

router.delete('/posts/:id', postControllers.destroy)

router.get('/posts', postControllers.getAll)

// USER MODEL
router.post('/register', userControllers.register)

router.post('/login', userControllers.login)


export default router
