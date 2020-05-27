// ENV VARS
require('dotenv').config({ logger: true })

// DEPENDENCIES IMPORTS
const fastify = require('fastify')()
const cors = require('fastify-cors')
const helmet = require('fastify-helmet')

const routes = require('./routes')


// ROUTES MIDDLEWARE
fastify.register(routes, { prefix: '/api/v1' })


// SERVER PROTECTION
fastify.register(cors, {})


// HEADERS PROTECTION
fastify.register(helmet, {})


// START SERVER
const start = async () => {
    try {
        await fastify.listen(
            process.env.PORT || 3003,
            () => console.log(`🐱‍💻 Up and runin\' on localhost:${process.env.PORT || 3003} 🐱‍👤`)
        )
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
