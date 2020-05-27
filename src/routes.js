const Controllers = require('./controllers')

module.exports = fastify => {
    fastify.get('/', Controllers.createRecord)
}
