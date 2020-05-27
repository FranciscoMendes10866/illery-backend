const postControllers = require('./controllers/post.controller')
const userControllers = require('./controllers/user.controller')

module.exports = fastify => {
    // GETS ALL POSTS
    fastify.get('/api/v1', postControllers.getAllRecords)

    // CREATE ADMIN USER
    fastify.post('/api/v1/create-admin', userControllers.createAdmin)
}
